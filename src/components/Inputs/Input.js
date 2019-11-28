import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';

const input = props => {
    return (
        <View style={styles.container}>
           <TextInput 
                {...props}
                editable
                style={styles.textInput}
                maxLength={props.maxLength}
                placeholderTextColor={styles.placeholderColor}
                selectionColor={styles.selectionTintColor}
            /> 
        </View>
        

    ) 
}

export default input;