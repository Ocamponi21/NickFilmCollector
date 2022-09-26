import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const FilmsScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log('Add Film!')}
                >
                <Text style={styles.buttonText}>Add Film</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default FilmsScreen;