// Components/AllProfil.js

import React from 'react';
import {StyleSheet, View, Image, Text, FlatList, Card, Button} from 'react-native';

export class AllProfil extends React.Component {
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Button title='Je suis un utilisateur' onPress={() => this.props.navigation.navigate('Profil')}/>
                <Button title='Je suis un bar'onPress={() => this.props.navigation.navigate('ProfilBar')}/>
                <Text style={{marginTop: 150, textAlign:"center"}}>Déjà inscrit ?</Text>
                <Button title='Connexion' onPress={() => this.props.navigation.navigate('Auth')}/>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: "center"
      }
  });

  export default AllProfil