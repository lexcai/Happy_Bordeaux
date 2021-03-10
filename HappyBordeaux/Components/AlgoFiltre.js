// Components/AlgoFiltre.js

import React from 'react'
import { StyleSheet, View, Text, Button, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
      title: "Ambiance :",
      data: ["Latino", "Retro", "British", "alternatif", "techno", "reggae"]
    },
    {
      title: "Ouvert Actuellement ?",
      data: ["Oui", "Non"]
    },
    {
      title: "Périmètre :",
      data: ["Entrez la zone à survoler"]
    },
    {
      title: "Affluence :",
      data: ["Forte", "Modérée", "Faible"]
    },
    {
      title: "Type :",
      data: ["Bière", "Cocktails", "Vin", "tapas"]
    }
  ];
  
  Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

class AlgoFiltre extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{position:"absolute"}}>
              <Icon name="chevron-back-outline" size={28} onPress={() => this.props.navigation.navigate('Search')}></Icon>
            </View>
            <View style={styles.main_container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Button style={styles.header} title={item} onPress={() => {alert('You tapped the button!');}}/>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    />
                <Button title="Valider" onPress={() => this.props.navigation.navigate('Search')}/>
            </View>
        </ScrollView>
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
        marginLeft: 10
    },
    item: {
      padding: 20,
      marginVertical: 8,
      fontFamily: "HelveticaNeue",
      color: "black",
      fontWeight: "bold"
    },
    header: {
      fontFamily: "HelveticaNeue",
      color: "black",
      fontWeight: "bold",
      fontSize: 22
    },
    title: {
      fontSize: 16
    }
  });

  export default AlgoFiltre
