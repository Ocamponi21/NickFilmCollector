import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Actors from '../../components/Actors';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage"

//use the hook to create database
const shopperDB = openDatabase({ name: 'Shopper.db' });
const actorsTableName = 'actors';


const ActorsScreen = props => {

  const navigation = useNavigation();

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      // declare an empty array that will store the results of the 
      // SELECT
      let results = [];
      //declare a transaction that will declare the SELECT
      shopperDB.transaction(txn => {
        //execute SELECT
        txn.executeSql(
          `SELECT * FROM ${actorsTableName}`,
          [],
          // callback function to handle the results from the SELECT 
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of actors ' + len)
            // if more than one row was returned 
            if (len > 0) {
              // loop through the rows 
              for (let i = 0; i < len; i++) {
                // push a row of data at a tiem onto the 
                // result array 
                let item = res.rows.item(i);
                results.push({
                  id: item.id,
                  first: item.first,
                  last: item.last,
                });
              }
              // assign results array to lists state variable 
              setActors(results);
            } else {
              //if no rows of data were returned,
              // set lists state variable to an empty array
              setActors([]);
            }
          },
          error => {
            console.log('Error getting lists' + error.message);
          },
        )
      });
    });
    return listener;
  });

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={actors}
          renderItem={({ item }) => <List post={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Add Actor')}
        >
          <Text style={styles.buttonText}> Add List </Text>
        </TouchableOpacity>

      </View>
    </View>
  );

};

export default ActorsScreen;