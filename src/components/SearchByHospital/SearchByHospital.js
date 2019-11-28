import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from './Styles';

const SearchByHospital = props => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                onPress={props.onSelectTypeSearch}
                style={{...styles.touchableOpacity,...props.touchableOpacityStyle}}   
            >
                 
                <View style={styles.imageContainer}>
                    <Image 
                        source={props.iconImage} 
                        alt="clinics" 
                        style={props.iconImageStyle}
                    />
                </View>
                
                <View style={styles.titleContraire}>
                    <Text style={{...styles.title, ...props.titleStyle}}>{props.title}</Text>
                </View>
        
            </TouchableOpacity>
            
        </View>
    )
}
export default SearchByHospital;