import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, FlatList, useWindowDimensions} from 'react-native';
import ListItem from '../../../components/listItem/ListItem';

const FeedScreen = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState('');
  const initialPage = 'https://rickandmortyapi.com/api/character';
  const renderItem = useCallback(({item}) => <ListItem character={item} />, []);
  const {width} = useWindowDimensions();
  const fetchPage = async (url: string) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      console.log('Fetching: ', url);
      const response = await fetch(url);
      const json = await response.json();
      setNextPage(json.info.next);
      setItems(existingItems => {
        return [...existingItems, ...json.results];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(initialPage);
  }, []);

  const onRefresh = () => {
    if (isLoading) {
      return;
    }
    setItems([]);
    // setNextPage(initialPage);
    fetchPage(initialPage);
  };

  const itemHeight = width + 20;

  // Use case: increase impression count for posts
  // that are visible on the screen for more than 0.5 seconds
  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        minimumViewTime: 500,
        itemVisiblePercentThreshold: 50,
      },
      onViewableItemsChanged: ({changed, viewableItems}) => {
        changed.forEach(changedItem => {
          if (changedItem.isViewable) {
            console.log('++ Impression for: ', changedItem.item.id);
          }
        });
      },
    },
  ]);
  if (items.length === 0) {
    // this is only to make the debug prop on FlatList Work
    return null;
  }
  return (
    <FlatList
      data={items}
      ListFooterComponent={() => isLoading && <ActivityIndicator />}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      refreshing={isLoading}
      onRefresh={onRefresh}
      onEndReached={() => fetchPage(nextPage)}
      onEndReachedThreshold={5}
      //   debug
      contentContainerStyle={{gap: 10}}
      columnWrapperStyle={{gap: 5}}
      numColumns={2}
      removeClippedSubviews={true}
      initialNumToRender={5}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      getItemLayout={(data, index) => ({
        length: itemHeight,
        offset: (itemHeight + 1) * index,
        index,
      })}
    />
  );
};

export default FeedScreen;
