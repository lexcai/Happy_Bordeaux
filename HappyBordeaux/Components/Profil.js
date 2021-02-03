// Components/Profil.js

import React from 'react';
import {StyleSheet, View, Image, Text, FlatList, Card} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export class Profil extends React.Component {
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Icon name="ellipsis-vertical-outline" size={24} color="#52575D"></Icon>
                    </View>
                    <View style={{alignSelf:"center"}}>
                        <View style={styles.ProfilImage}>
                            <Icon name="person-circle-outline" size={200} color="#f2eddb"></Icon>
                        </View>
                        <View style={styles.active}></View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, {fontWeight:"200", fontsize: 56}]}>NOM</Text>
                        <Text style={[styles.text, {color: "#AEB5BC", fontsize: 46}]}>Age ?</Text>
                    </View>
                    
                    <View style={styles.statsContainer}>
                        <View style={styles.statsBox}>
                            <Text>Participe à :</Text>
                        </View>
                        <View style={styles.blocImage}>
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                            <Image style={styles.listeImageBar} source={{uri: "image"}} resizeMode="center" />
                        </View>
                        <View style={styles.statsBox}>
                            <Text>Amis :</Text>
                        </View>
                        <View style={styles.blocImage}>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                            <Icon name="person-circle-outline" size={120} color="#f2eddb"></Icon>
                        </View>
                        <View style={styles.statsBox}>
                            <Text>Anciens Évennements :</Text>
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
          color: "#52575D"
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
          justifyContent: "space-between",
          marginTop: 24,
          marginLeft: 370,
          marginHorizontal: 16
      },
      ProfilImage: {
          width: 200,
          height: 200,
          borderRadius: 100,
          overflow: "hidden"
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
      active: {
          backgroundColor: "#34FFB9",
          position: "absolute",
          bottom: 28,
          left: 10,
          padding: 4,
          height: 20,
          width: 20,
          borderRadius: 10
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
          alignSelf: "center"
      },
      blocImage:{
        flexDirection: "row",
      },
      listeImageBar: {
        width: 120,
        height: 180,
        margin: 5,
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