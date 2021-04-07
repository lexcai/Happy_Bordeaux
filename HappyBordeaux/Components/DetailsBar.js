// Components/AlgoFiltre.js

import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


class DetailsBar extends React.Component {
    render() {
      return (
        <View style={styles.main_container}>
            <View style={{position:"absolute", marginTop:50, flexDirection:"row"}}>
                <Icon name="chevron-back-outline" size={38} onPress={() => this.props.navigation.goBack()}></Icon>
                <Text style={styles.titre}>NOM DE L'ÉVENNEMENT</Text>
            </View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: "image"}}
                />
            </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        backgroundColor: "#aedfe2"
    },
    container: {
        marginTop:130,
        justifyContent: 'center',
        backgroundColor: "#aedfe2",
        marginBottom : 50
      },
      image: {
        width: 420,
        height: 240,
        backgroundColor: 'gray',
      },
      titre:{
        fontSize:28, 
        fontWeight:"bold", 
        marginTop:3, 
        textAlign : "center"
      },
  });

  export default DetailsBar
