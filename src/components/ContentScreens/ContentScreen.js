import React from "react";
import { View , Text} from 'react-native';
import styles from './Styles';
import SearchByHospitalClinic from '../../components/SearchByHospital/SearchByHospital';
import { Clinic, General, Doctor } from '../../components/Images/ExportImage';
import RadiusUserLocationBox from '../../components/RaduisUserLocationBox/RaduisUserLocationBox';
import Button from '../../components/Buttons/Button';

const ContentScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContentScreen}>
                <SearchByHospitalClinic 
                    iconImage={Clinic}
                    iconImageStyle={styles.iconImageStyle}
                    title="Clinics"
                    onSelectTypeSearch={() => { 
                        alert('Touched Clinic!');
                    }}  
                />
                <SearchByHospitalClinic 
                    iconImage={General}
                    title="General"
                    titleStyle={styles.titleStyles}
                    touchableOpacityStyle={styles.touchableOpacityStyle}
                    onSelectTypeSearch={() => { 
                        alert('Touched Clinic!');
                    }}
                />
                <SearchByHospitalClinic 
                    iconImage={Doctor}
                    iconImageStyle={styles.iconImageStyle}
                    title="Hospitals"
                    onSelectTypeSearch={() => { 
                        alert('Touched Clinic!');
                    }}
                />
            </View>
            <RadiusUserLocationBox  
                raduisLeftInKm='5Km'
                raduisTopInKm='4Km'
                raduisRightInKm='3Km'
                raduisBottomInKm='1Km'
            />
            
            <Button 
                title="search" 
                customButton={styles.customButton}
                _onChangedHandler={props._onChangedHandler}
            />
        </View>
    );
}

export default ContentScreen;