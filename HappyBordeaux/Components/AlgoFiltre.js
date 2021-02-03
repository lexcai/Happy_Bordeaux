// Components/AlgoFiltre.js

import React from 'react'
import { StyleSheet, View, Text, Button, SectionList } from 'react-native'

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

export class AlgoFiltre extends React.Component {
    render() {
      return (
        <View style={styles.container}>
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

<<<<<<< HEAD
  export default AlgoFiltre
=======
  export default AlgoFiltre
>>>>>>> origin/fusion
