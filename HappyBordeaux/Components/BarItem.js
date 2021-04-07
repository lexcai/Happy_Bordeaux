// Components/BarItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

class BarItem extends React.Component {
  constructor(props) {
    super(props)
    bool=false;
    this.state = { iconName: "heart-outline", color: "black" };
   }
  render() {
    const ev = this.props.ev
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
                      <Text style={styles.title_text} onPress={() => this.props.navigation.navigate('DetailsBar')}>{ev.nom}</Text>
                      <Text style={styles.title_heure}>{ev.heureEvennement}</Text>
                  </View>
                  <View style={styles.descr_container}>
                      <Icon size={30} style={{marginRight: 280, marginTop:-10, color:this.state.color}} onPress={() => this.setState({ iconName: "heart", color:"red" })} name= {this.state.iconName}></Icon>
                      <Text style={styles.description_text} numberOfLines={2}>{ev.descr}</Text>
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
    height: 250,
    flexDirection: 'row',
    marginBottom: 25
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
  title_heure:{
    position:"absolute",
    fontSize: 22,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    marginTop: 150,
    marginLeft: 250
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