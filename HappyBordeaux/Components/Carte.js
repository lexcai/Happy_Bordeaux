// Components/Carte.js

import React from 'react'

import MapView from 'react-native-maps'

import { StyleSheet, View, Text, Button, SectionList } from 'react-native'


export class Carte extends React.Component {
    render() {
      return (
        <View style={styles.container}>
                <MapView style={{flex: 1}}  
                region={{          
                    latitude: 44.837789,
                    longitude: -0.57918,      
                    latitudeDelta: 0.0922,          
                    longitudeDelta: 0.0421        }}
                showsUserLocation={true}      />
            </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 22,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 16
    }
  });

  export default Carte
