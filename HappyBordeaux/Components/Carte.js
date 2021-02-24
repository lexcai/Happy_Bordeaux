// Components/Carte.js

import React from 'react'

import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

import { StyleSheet, View, Text, Button, SectionList } from 'react-native'

export class Carte extends React.Component {
    render() {
      const markers = this.props.markersTest
      return (
        <View style={styles.container}>
            <MapView style={{flex: 1}}
              region={{          
                latitude: 44.837789,
                longitude: -0.57918,      
                latitudeDelta: 0.0922,          
                longitudeDelta: 0.0421        }}
              showsUserLocation={true} 
              zoomEnabled={true}
            >
                <Marker
                  coordinate={{ latitude : 44.838, longitude : -0.5777 }}
                  title={"Bar Truc"}
                />
                <Marker
                  coordinate={{ latitude : 44.840469, longitude : -0.569266 }}
                  title={"Wall Street"}
                /> 
                <Marker
                  coordinate={{ latitude : 44.853158, longitude : -0.567504 }}
                  title={"King Kong Bar"}
                /> 
            </MapView>    
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
