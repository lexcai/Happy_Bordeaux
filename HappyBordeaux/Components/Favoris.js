// Components/Favoris.js

import React from 'react'
import bars from '../Helpers/BarData'
import BarItemFavoris from './BaritemFavoris'

import { StyleSheet, View, Text, Button, SectionList, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export class Favoris extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 30, marginTop:70}}>FAVORIS</Text>
            <ScrollView>
              <FlatList
                  data={bars}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <BarItemFavoris bar={item}/>}
              />
            </ScrollView>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: "#aedfe2"
    }
  });

  export default Favoris