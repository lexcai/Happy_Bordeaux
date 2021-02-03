// Components/Profil.js

import React from 'react';
import {StyleSheet, View, Image, Text, FlatList, Card, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export class Profil extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Icon style={styles.Logo} name="chatbubble-outline" size={28} color="#52575D"></Icon>
                        <Icon style={styles.Logo} name="notifications-outline" size={28} color="#52575D"></Icon>
                        <Icon name="settings-outline" size={28} color="#52575D"></Icon>
                    </View>
                    <View style={styles.infoProfil}>
                        <Icon name="person-circle-outline" size={200} color="#f2eddb"></Icon>
                        <Text style={[styles.text, {fontWeight:"600", fontsize: 60}]}>Prénom Nom{"\n"}Adresse e-mail</Text>
                        <View style={styles.bouton}>
                            <Text style={styles.textBouton} onPress={() => {alert('You tapped the button!');}}>Modifier le profil</Text>
                        </View>
                    </View>
                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text style={{marginLeft: 5, fontSize: 18, textDecorationLine: 'underline'}}>Évènements à venir :</Text>
                        </View>
                        <View style={styles.blocImage}>
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={{marginLeft: 5, fontSize: 18, textDecorationLine: 'underline'}}>Ami.e.s :</Text>
                        </View>
                        <View style={styles.blocAmis}>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                        </View>
                        <View style={styles.statsBox}>
                            <Text style={{marginLeft: 5, fontSize: 18, textDecorationLine: 'underline'}}>Évènements passés :</Text>
                        </View>
                        <View style={styles.blocImage}>
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#fff",
          marginTop: 50
      },
      text: {
          fontFamily: "HelveticaNeue",
          color: "#52575D",
          marginTop: 80
      },
      bouton: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        marginTop: 140,
        marginLeft: -100,
        width: 150,
        height: 40,
        fontWeight: "bold",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        textAlign: "center"
      },
      textBouton: {
        marginTop: 9,
        marginLeft: 20
      },
      image: {
        width: 200,
        height: 200,
        margin: 5,
        backgroundColor: '#f2eddb',
        borderRadius: 200
      },
      titleBar: {
          flexDirection: "row",
          marginLeft: 270,
          marginTop: 24,
          marginHorizontal: 16
      },
      Logo: {
          marginRight: 20
      },
      nbNotif: {
        backgroundColor: "#dd4a4b",
        color: "#ffffff",
        width: 15,
        height: 15,
        borderRadius: 3
      },
      infoProfil: {
          flexDirection: "row",
          width: 200,
          height: 200
      },
      dm: {
          backgroundColor: "#41444B",
          position: "absolute",
          top: 20,
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
      },
      add: {
          backgroundColor: "#41444B",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 60,
          height: 60,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center"
      },
      infoContainer: {
          alignSelf: "center",
          alignItems: "center",
          marginTop: 16
      },
      statsBox: {
          flex: 1,
          marginTop: 42,
      },
      blocImage:{
        margin: 15,
        flexDirection: "row",
        backgroundColor: "#eb7570"
      },
      blocAmis:{
        flexDirection: "row"
      },
      listeImageBar: {
        width: 120,
        height: 90,
        margin: 15,
        marginRight: 5,
        backgroundColor: 'gray'
      },
      listeImageAmis: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: '#f2eddb',
        borderRadius: 250
      }
  });

  export default Profil