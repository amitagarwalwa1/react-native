import {View, Text, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import FastImage from 'react-native-fast-image';
// import  from 'react';

type CharacterListItem = {
  character: Character;
};

const CharacterListItem = ({character}: CharacterListItem) => {
  console.log('Re-rendering: ', character.id);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <FastImage
        style={styles.image}
        source={{
          uri: character.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* <Image source={{uri: character.image}} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 10,
  },
  name: {
    height: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkslategrey',
    alignSelf: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default memo(
  CharacterListItem,
  (prevProps, nextProps) => prevProps.character.id === nextProps.character.id,
);
