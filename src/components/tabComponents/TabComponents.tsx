// src/components/CustomTab.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const CustomTab = ({tabs, onTabPress}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabPress = tab => {
    setActiveTab(tab.name);
    onTabPress(tab);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      key={item.name}
      style={[styles.tab, activeTab === item.name && styles.activeTab]}
      onPress={() => handleTabPress(item)}>
      <Text
        style={[
          styles.tabText,
          activeTab === item.name && styles.activeTabText,
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    // padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  tab: {
    padding: 10,
    borderRadius: 2,
    marginHorizontal: 5,
  },
  activeTab: {
    // backgroundColor: '#007bff',
    position: 'relative',
    bottom: 0,
    borderBottomWidth: 5,
    borderBottomColor: '#007bff',
  },
  tabText: {
    color: '#007bff',
  },
  activeTabText: {
    color: '#007bff',
  },
});

export default CustomTab;
