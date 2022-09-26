import React from 'react';
import styles from './styles';

const AddActor = props => {
    
    const navigation = useNavigation();
    //name of shopping,store, date
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');


    return (
        <View style={styles.container}>
                <View style={styles.topContainer}>
                        <TextInput
                                value={first}
                                onChangeText={value => setFirst(value)}
                                style={styles.name}
                                clearButtonMode={'while-editing'}
                                placeholder={'Enter First Name'}
                                placeholderTextColor={'grey'}
                        />
                        <TextInput
                                value={last}
                                onChangeText={value => setLast(value)}
                                style={styles.store}
                                clearButtonMode={'while-editing'}
                                placeholder={'Enter Last Name'}
                                placeholderTextColor={'grey'}
                        />
                </View>
                <View style={styles.bottomContainer}>
                        <Pressable style={styles.button} onPress={onListAdd}>
                                <Text style={styles.buttonText}> Add</Text>
                        </Pressable>

                </View>
        </View>
);
};

export default Screen;