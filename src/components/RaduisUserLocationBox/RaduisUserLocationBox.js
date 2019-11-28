import React from 'react';
import { View, Text,} from 'react-native';
import styles from './Styles';

const RadiusUserLocationBox = props => {
    return (
        <View style={styles.container}> 
        
            <View style={styles.raduisContainer}>
                <View style={styles.raduisContainerLeft}>
                    <Text style={styles.raduisTitleStyle}>{props.raduisLeftInKm}</Text>
                </View>
                
                <View style={styles.raduisContainerTop}>
                    <Text style={styles.raduisTitleStyle}>{props.raduisTopInKm}</Text>
                </View>
            </View> 
                       
            <View style={styles.raduisView1}>
                <View style={styles.radiusView2}>  
                </View>
            </View>
           
            <View style={styles.raduisContainer}>
                <View style={styles.raduisContainerRight}>
                    <Text style={styles.raduisTitleStyle}>{props.raduisRightInKm}</Text>
                </View>
                
                <View style={styles.raduisContainerBottom}>
                    <Text style={styles.raduisTitleStyle}>{props.raduisBottomInKm}</Text>
                </View>
                
            </View>
            
        </View>
    )
}
export default RadiusUserLocationBox;