import React,{ PropTypes } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './Styles';


const smallButton = props => {
    
    return (
        <View style={styles.smallBtnContainer}>
            <Button 
                
                onPress={props._onChangedHandler} 
                type="clear"
                containerStyle={styles.smallBtn}
                icon={
                    <Icon
                        name="arrow-right"
                        size={styles.iconSIze}
                        color={styles.iconColor}
                    />
                }
            />
        </View>
    );
}

// button.PropTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.func
// }

export default smallButton;