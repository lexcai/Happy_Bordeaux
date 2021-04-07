// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Image, Button, FlatList } from 'react-native'
import evs from '../Helpers/EvennementData'
import BarItem from './BarItem'
import Icon from 'react-native-vector-icons/Ionicons';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchedText = "" 
  }
  _searchTextInputChanged(saisie) {
    this.searchedText = saisie
  }
  _loadBars(saisie){
    for (var i=0; i < evs.length-1; i++) {
      if(saisie == evs[i].nom){
        result=evs[i]
        console.log(result) // jusqu'ici tout fonctionne mais pas l'affichage du résultat
      }
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.header}>
          <View style={styles.barre}>
            <TextInput style={styles.texteBarre} placeholder='Nom évennement' onChangeText={(saisie) => this._searchTextInputChanged(saisie)}/>
          </View>
          <View style={styles.filtre}>
            <Icon style={styles.logo} name="ellipsis-vertical-outline" size={34} color="#52575D" onPress={() => this.props.navigation.navigate('AlgoFiltre')}></Icon>
          </View>
        </View >
          <Button title='Rechercher' onPress={() => this._loadBars(this.searchedText)}/>
          <FlatList
              data={evs}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <BarItem navigation={this.props.navigation} ev={item}/>}
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