import React,{ PropTypes } from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Styles';


const button = props => {
    
    return (
        <View style={styles.clearButtonContainer}>
            <Text style={styles.clearText}>{props.text}</Text>
            <Button 
                onPress={props._onChangedHandler} 
                title={props.title}
                titleStyle={props.clearButtonText}
                type="clear"
                icon={props.icon}
            /> 
        </View>
        
    );
}

// button.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.func
// }

export default button;