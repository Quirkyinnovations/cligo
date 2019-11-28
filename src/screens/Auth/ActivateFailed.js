import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import StatusBar from '../../components/StatusBars/StatusBarAuth';
import Icon from '../../components/Icons/IconExclamation';

const activateAccountFailed = (props) => {
    return (
        <Aux> 
            <StatusBar />
            <View style={styles.logoContainer}>
                <Logo />    
            </View>
    
            <View style={styles.contentContainer}> 
            
                <View style={styles.otpContainer}>

                    <Icon
                        name="exclamation"
                        style={styles.iconExclamationSTyle}
                    />
                    
                    <PageTitle 
                        title="sorry"
                        titleText={styles.titleActiveSuccess}
                    />
                
                    <View>
                        <Text style={styles.activeSuccessTitle}>activation account failed </Text>
                    </View>
                            
                </View>
                    
                <Button 
                    title="back" 
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

export default activateAccountFailed;