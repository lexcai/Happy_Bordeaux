/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Navigation from './Components/Search'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
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
      <View style={styles.container}>
        <Text>MapScreen</Text>
      </View>
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

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

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

export default createAppContainer(TabNavigator);
