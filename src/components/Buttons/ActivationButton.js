import React,{ PropTypes } from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Styles';


const activationButton = props => {
    
    return (
        <View style={styles.activationButtonContainer}>
            <Text style={styles.activationText}>{props.text}</Text>
            <Button 
                onPress={props._onChangedHandler} 
                icon={props.icon}
            /> 
        </View>
        
    );
}

// button.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.func
// }

export default activationButton;