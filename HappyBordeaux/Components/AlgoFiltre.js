// Components/AlgoFiltre.js

import React from 'react'
import { StyleSheet, View, Text, Button, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
      title: "Ambiance",
      data: ["Latino", "Retro", "British", "alternatif", "techno", "reggae"]
    },
    {
      title: "Ouvert Actuellement",
      data: ["Oui", "Non"]
    },
    {
      title: "Périmètre maximum",
      data: ["O km","5 km", "10 km"]
    },
    {
      title: "Affluence",
      data: ["Forte", "Modérée", "Faible"]
    },
    {
      title: "Type",
      data: ["Bière", "Cocktails", "Vin", "tapas"]
    }
  ];
  Item = ({ title }) => (
    <View style={{flexDirection: 'row', marginBottom:5, marginLeft : 15}}>
      <Icon size={24} style={{marginRight : 5, color: "dimgrey"}}  name="square-outline"></Icon>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

class AlgoFiltre extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Icon name="close" style={{marginLeft:10}} size={28} onPress={() => this.props.navigation.navigate('Search')}></Icon>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.main_container}>
                  <SectionList style={styles.sections}
                      sections={DATA}
                      keyExtractor={(item, index) => item + index}
                      renderItem={({ item }) => <Item title={item} />}
                      renderSectionHeader={({ section: { title } }) => (
                          <Text style={styles.header}>{title}</Text>
                      )}
                      />
              </View>
          </ScrollView>
          <View style={styles.footer}>
            <Button color='white' title="Appliquer" onPress={() => this.props.navigation.navigate('Search')}/>
          </View>
      </SafeAreaView>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#aedfe2"
    },
    main_container: {
        marginTop: 30,
        marginLeft: 10,
        alignItems: 'flex-start'
    },
    header: {
      position:"absolute"
    },
    footer: {
      backgroundColor:"black",
      width:400,
      margin:5,
      borderWidth: 2,
      borderColor: "black",
    },
    title: {
      fontSize: 18,
      color: "dimgrey",
      marginTop : 3
    }
  });

  export default AlgoFiltre
