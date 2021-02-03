// Components/Favoris.js

import React from 'react'
import bars from '../Helpers/BarData'
import BarItem from './BarItem'

import { StyleSheet, View, Text, Button, SectionList, FlatList } from 'react-native'


export class Favoris extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.titre}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>FAVORIS</Text>
            </View>
            <View>
            <FlatList
                data={bars}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <BarItem bar={item}/>}
            />
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: "#aedfe2"
    },
    titre: {
        marginTop: 60
    }
  });

  export default Favoris