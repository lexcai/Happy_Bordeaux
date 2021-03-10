// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Image, Button, FlatList } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import bars from '../Helpers/BarData'
import BarItem from './BarItem'
import Icon from 'react-native-vector-icons/Ionicons';
import BarItemFavoris from './BaritemFavoris';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchedText = "" 
  }
  _noteBar(laNote) {
    note = parseInt(laNote);
    console.log(note);
    if (note == 0){
      return ;
    }
    if (note == 1){
      return <View style={styles.note_container}>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      </View>
    }
    if (note == 2){
      return <View style={styles.note_container}>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      </View>
    }
    if (note == 3){
      return <View style={styles.note_container}>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
        <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      </View>
    }
    if (note == 4){
      return <View style={styles.note_container}> 
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
    </View>
    }
    if (note == 5){
      return <View style={styles.note_container}>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
      <Icon size={30} style={{marginTop: 135}} name="wine-outline"></Icon>
    </View>
    }
  }
  _searchTextInputChanged(saisie) {
    this.searchedText = saisie
  }
  _loadBars(saisie){
    for (var i=0; i < bars.length-1; i++) {
      if(saisie == bars[i].nom){
        result=bars[i]
        console.log(result) // jusqu'ici tout fonctionne mais pas l'affichage du résultat
      }
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.header}>
          <View style={styles.barre}>
            <TextInput style={styles.texteBarre} placeholder='Nom du bar' onChangeText={(saisie) => this._searchTextInputChanged(saisie)}/>
          </View>
          <View style={styles.filtre}>
            <Icon style={styles.logo} name="ellipsis-vertical-outline" size={34} color="#52575D" onPress={() => this.props.navigation.navigate('AlgoFiltre')}></Icon>
          </View>
        </View>
          <Button title='Rechercher' onPress={() => this._loadBars(this.searchedText)}/>
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
    backgroundColor: "#aedfe2",
    marginBottom : 130
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
    backgroundColor:'#ffffff',
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
  },
  logo: {
    marginTop: 7,
    marginLeft : 20
  },
})

export default Search