// Components/BarItemFavoris.js

import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

class BarItemFavoris extends React.Component {
    _noteBar(laNote) {
        note = parseInt(laNote);
        console.log(note);
        if (note == 0){
          return ;
        }
        if (note == 1){
          return <View style={styles.icon_container}>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          </View>
        }
        if (note == 2){
          return <View style={styles.icon_container}>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          </View>
        }
        if (note == 3){
          return <View style={styles.icon_container}>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
            <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          </View>
        }
        if (note == 4){
          return <View style={styles.icon_container}> 
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
        </View>
        }
        if (note == 5){
          return <View style={styles.icon_container}>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
          <Icon size={24} style={{marginTop: 135}} name="wine-outline"></Icon>
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
                        <View style={styles.header_container}>
                            <Text style={styles.title_text}>{bar.nom}</Text>
                        </View>
                        <View style={styles.header_container}>
                            <Text style={styles.hh_text}>{bar.adresse}{"\n"}{bar.horaires}</Text>
                        </View>
                    </View>
                    <View style={styles.icon_container}>
                        <Text>{this._noteBar(bar.note)}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    main_container: {
        marginTop: 20,
        height: 250,
        flexDirection: 'row'
    },
    image: {
        width: 360,
        height: 240,
        marginLeft: 25,
        marginRight: 25,
        margin: 5,
        backgroundColor: 'gray',
        borderRadius: 50
    },
    content_container: {
        position: 'absolute', 
        width: 190,
        height: 150,
        top: 15, 
        left: 45,  
        bottom: 0, 
        justifyContent: 'center'
    },
    icon_container: {
        position: 'absolute',
        flexDirection: 'row',
        width: 90,
        height: 230,
        top: 35, 
        left: 75,  
        bottom: 0
    },
    
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 23,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        margin: 20
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    hh_container: {
        flex: 1
    },
    hh_text: {
        textAlign: 'right',
        fontSize: 14,
        textAlign: "center",
        margin: 5
    }
})

export default BarItemFavoris