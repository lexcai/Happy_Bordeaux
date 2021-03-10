// Components/BarItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class BarItem extends React.Component {
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
  render() {
    const bar = this.props.bar
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.main_container}>
                  <View>
                      <Image
                      style={styles.image}
                      source={{uri: "image"}}
                      />
                  </View>
                  <View style={styles.content_container}>
                      <Text style={styles.title_text}>{bar.nom}</Text>
                      <Text>{this._noteBar(bar.note)}</Text>
                  </View>
                  <View style={styles.descr_container}>
                      <Text style={styles.description_text} numberOfLines={6}>{bar.descr}</Text>
                  </View>
              </View>
          </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main_container: {
    marginTop: 20,
    height: 250,
    flexDirection: 'row'
  },
  image: {
    width: 360,
    height: 240,
    margin: 5,
    backgroundColor: 'gray',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 50
  },
  content_container: {
    position:"absolute",
    height: 230,
    flexDirection: 'row',
    width: 350,
    marginLeft: 25,
    marginRight: 25
  },
  descr_container: {
    position:"absolute",
    height: 240,
    width: 360,
    marginTop: 207,
    flexDirection: 'row', 
    justifyContent:"flex-end"
  },
  note_container: {
    position:"absolute",
    height: 230,
    width: 350,
    flexDirection:"row",
    justifyContent:"flex-end"
  },
  title_text:{
    position:"absolute",
    fontWeight: 'bold',
    fontSize: 23,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    marginTop: 150,
    marginLeft: 30
  },
  vote_text:{
    position:"absolute",
    fontWeight: 'bold',
    fontSize: 23,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    marginTop: 150,
    marginLeft: 300
  },
  description_text:{
    position:"absolute",
    fontSize: 14,
    paddingRight: 5,
  }
})

export default BarItem