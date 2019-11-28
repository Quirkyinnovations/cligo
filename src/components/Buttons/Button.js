import React,{ PropTypes } from 'react';
import { Button } from 'react-native-elements';
import styles from './Styles';


const button = props => {
    
    return (
        <Button 
            onPress={props._onChangedHandler} 
            title={props.title}
            titleStyle={{...styles.buttonText,...props.customTitleBottom}}
            type="clear"
            containerStyle={{...styles.buttonContainer,...props.customButton}}
        />
    );
}

// button.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.func
// }

export default button;