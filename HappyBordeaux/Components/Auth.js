import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function createAccount() {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('utilisateur inscrit');
      firestore().collection('users').doc(auth().currentUser.uid).set({
        username: username,
        email: email,
      })
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Pas connecté, inscription en dessous</Text>
        <Text style={styles.main_text}>Votre Email</Text>
        <TextInput style={styles.textinput} value={email} placeholder="Email" onChangeText={setEmail} />
        <Text style={styles.main_text}>Votre mot de passe</Text>
        <TextInput style={styles.textinput} value={password} placeholder="******" onChangeText={(text) => setPassword(text)} />
        <Text style={styles.main_text}>Votre nom d'utilisateur</Text>
        <TextInput style={styles.textinput} value={username} placeholder="Pseudo" onChangeText={(text) => setUsername(text)} />
     
        <Button style={styles.submit} title={'Submit'} onPress={() => createAccount()} />
      </View>
    );
      }


  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <Button title={'Déconnexion'} onPress={() => auth().signOut()} />
    </View>
  );

}


const styles = StyleSheet.create({
  main_text: {
    marginTop: 10,
    textAlign: 'center'
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  submit: {
    paddingTop: 10
  } 
})