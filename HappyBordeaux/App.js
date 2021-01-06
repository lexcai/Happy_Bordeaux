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
import { SafeAreaView, ScrollView,View,Text,StatusBar,StyleSheet } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Search from './Components/Search'
import AlgoFiltre from './Components/AlgoFiltre'
import Carte from './Components/Carte'

class HomeScreen extends React.Component {
  render() {
    return (
      <Search></Search>
    )
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    )
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <Carte></Carte>
    )
  }
}

class FavScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FavScreen</Text>
      </View>
    )
  }
}
class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Accueil: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Favoris: {
      screen: FavScreen,
      navigationOptions: { 
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-star'} />
          </View>
        ),
        activeColor: '#EB5E5E',
        inactiveColor: '#ffffff',
        barStyle: { backgroundColor: '#5DC0C6' },
      }
    },
    Carte: {
      screen: MapScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-map'} />
          </View>
        ),
        activeColor: '#EB5E5E',
        inactiveColor: '#ffffff',
        barStyle: { backgroundColor: '#5DC0C6' },
      }
    },
    Profil: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: '#EB5E5E',
        inactiveColor: '#ffffff',
        barStyle: { backgroundColor: '#5DC0C6' },
      }
    },
  },
  {
    initialRouteName: 'Accueil',
    activeColor: '#EB5E5E',
    inactiveColor: '#ffffff',
    barStyle: { backgroundColor: '#5DC0C6' },
  }
);

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

export default createAppContainer(TabNavigator);