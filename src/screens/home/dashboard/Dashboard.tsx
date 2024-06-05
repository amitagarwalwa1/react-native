import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import CustomTab from '../../../components/tabComponents/TabComponents';
import {Animated} from 'react-native';
import {Easing} from 'react-native';

const Home = ({title}) => (
  <View style={styles.content}>
    <Text style={styles.title}>This is the {title} component</Text>
    <Text style={styles.subtitle}>
      This is a subtitle with some dummy text.
    </Text>
    <Button title="Demo Button" onPress={() => alert('Demo Button Pressed')} />
  </View>
);

const Dashboard = () => {
  const tabs = [
    {name: 'Home', component: <Home title={'Home'} />},
    {name: 'Settings', component: <Home title={'Settings'} />},
    {name: 'Profile', component: <Home title={'Profile'} />},
    {name: 'Manage Profile', component: <Home title={'Manage Profile'} />},
    {name: 'Dashboard', component: <Home title={'Dashboard'} />},
    {name: 'Notifications', component: <Home title={'Notifications'} />},
    {name: 'Messages', component: <Home title={'Messages'} />},
    {name: 'Reports', component: <Home title={'Reports'} />},
    {name: 'Analytics', component: <Home title={'Analytics'} />},
    {name: 'Help', component: <Home title={'Help'} />},
    {name: 'Logout', component: <Home title={'Logout'} />},
  ];

  const [activeTabComponent, setActiveTabComponent] = useState(
    tabs[0].component,
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear, // Ensuring a linear easing function
      useNativeDriver: true,
    }).start();
  }, [activeTabComponent]);

  const handleTabPress = tab => {
    fadeAnim.setValue(0);
    setActiveTabComponent(tab.component);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
        <Text style={styles.title}>This is the Settings component</Text>
      </View>
      <View style={styles.tabsContainer}>
        <CustomTab tabs={tabs} onTabPress={handleTabPress} />
      </View>
      <View style={styles.activeTabContainer}>{activeTabComponent}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'gray',
    fontSize: 16,
    marginVertical: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabsContainer: {
    // height: 50,
    backgroundColor: '#f2f2f2',
  },
  activeTabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;
