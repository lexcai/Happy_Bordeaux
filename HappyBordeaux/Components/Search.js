// Components/Search.js
// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text , FlatList} from 'react-native'
import bars from '../Helpers/BarData'
import BarItem from './BarItem'


class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Nom du bar'/>

                <Button title='Rechercher' onPress={() => {}}/>

                <FlatList
                    data={bars}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <BarItem bar={item}/>}
                />

            </View>
         )
     }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search