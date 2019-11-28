import React from 'react';
import { View, } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const icon = props => {
    return (
       <View style={styles.exclamationContainer}>
           <Icon 
                name={props.name}
                style={props.style}
           />
       </View> 
    );
}
export default icon;