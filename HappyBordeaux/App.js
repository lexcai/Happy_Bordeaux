/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * https://reactnavigation.org/docs/4.x/navigating : tuto hyper cool
 */


import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Search from './Components/Search'
import AlgoFiltre from './Components/AlgoFiltre'

/*
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
       <View>
        <Search />
       </View>
    </>
  );
};
*/

const AppNavigator = createStackNavigator(
  {
    Search: Search,
    AlgoFiltre: AlgoFiltre,
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App