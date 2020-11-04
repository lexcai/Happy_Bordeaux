import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
        <TextInput value={email} onChangeText={setEmail} />
        <TextInput value={password} onChangeText={(text) => setPassword(text)} />
        <TextInput value={username} onChangeText={(text) => setUsername(text)} />

        <Button title={'Submit'} onPress={() => createAccount()} />
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

export default App;