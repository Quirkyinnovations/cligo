import React from 'react';
import { Text, View,  } from 'react-native';
import styles from './Styles';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import StatusBar from '../../components/StatusBars/StatusBarAuth';
import ActivityIndicator from '../../components/Spinners/CustomIndicator';

const SearchProcess = (props) => {
    return (
        <Aux> 
            <StatusBar />
            <View style={styles.logoContainer}>
                <PageTitle 
                    title="Searching ..."
                    titleText={styles.titleActiveSuccess}
                />
                
                <View>
                    <Text style={styles.activeSuccessTitle}>for health hospital near you </Text>
                </View>   
            </View>
    
            <View style={styles.contentContainer}> 
            
                <View style={styles.otpContainer}>

                    <ActivityIndicator 
                        color={styles.ActivityIndicatorColor} 
                        size='large'
                        animation={true} 
                    />
                           
                </View>
                    
                <Button 
                    title="cancel" 
                    customButton={styles.customButtonSearchProcess}
                    customTitleBottom={styles.customTitleBottomSearchProcess}
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Signup'})
                    }}
                />
            </View>
            
            <View style={styles.footerContainer}>
                <Footer/> 
            </View> 
    
        </Aux> 
    );
}

export default SearchProcess;