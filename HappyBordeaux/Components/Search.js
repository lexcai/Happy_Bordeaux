// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Image, Button, FlatList } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import bars from '../Helpers/BarData'
import BarItem from './BarItem'
import AlgoFiltre from './AlgoFiltre'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
      <View style={styles.header}>
        <View style={styles.barre}>
          <TextInput style={styles.texteBarre} placeholder='Nom du bar'/>
        </View>
        <View style={styles.filtre}>
          <Button style={styles.boutonFiltre} title='•••' onPress={() => this.props.navigation.navigate('AlgoFiltre')}/>
        </View>
      </View>
        <Button title='Rechercher'/>
        <FlatList
            data={bars}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <BarItem bar={item}/>}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 10
  },
  header:{
    flex:1,
    flexDirection: 'row',
    height: 50,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 50,
    marginTop:50
  },
  barre: {
    flex:5,
    height: 50,
    width: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  texteBarre:{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    paddingLeft: 5
  },
  filtre: {
    flex:1,
    width:50,
    height:50,
    marginLeft : 5,
    marginTop : 5
  }
})

export default Search