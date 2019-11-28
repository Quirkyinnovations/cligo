import React from 'react';
import { View } from 'react-native';
import 
    MapView, {
    PROVIDER_GOOGLE,
    Marker,
    Polyline
}from 'react-native-maps';
import ActivityIndicator from '../../components/Spinners/CustomIndicator';
import styles from './Styles';
import Colors from '../../constants/Colors';

const Map = ({mapLoaded,onRegionChangeComplete,region,points}) => { 
    // check if the map is loaded or not
    if (!mapLoaded) {
        return (
            <View style={styles.mapLoadedContainer}>
            <ActivityIndicator 
                size={1}
                color={Colors.green}
                animating={true}
            />
            </View>
        );
    };
    
    return (
        <View style={styles.container}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                // region={region}
                style={styles.mapStyle}
                initialRegion={region}
                onRegionChangeComplete={onRegionChangeComplete}
            >
            
                <Polyline 
                    coordinates={points} 
                    strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={3} 
                />
            </MapView>
            
        </View>
    )
}
export default Map;