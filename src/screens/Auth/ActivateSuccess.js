import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import StatusBar from '../../components/StatusBars/StatusBarAuth';
import Icon from '../../components/Icons/IconCheck';

const activateAccountSuccess = (props) => {
    return (
        <Aux> 
            <StatusBar />
            <View style={styles.logoContainer}>
                <Logo />    
            </View>
        
            <View style={styles.contentContainer}> 
            
                <View style={styles.otpContainer}>

                    <Icon
                        name="check"
                        style={styles.iconSuccessSTyle}
                    />
                    
                    <PageTitle 
                        title="congratulations"
                        titleText={styles.titleActiveSuccess}
                    />
                
                    <View>
                        <Text style={styles.activeSuccessTitle}>you have successfully activated account </Text>
                    </View>
                               
                </View>
                    
                <Button 
                    title="log in" 
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Login'})
                    }}
                />
        </View>
        
        <View style={styles.footerContainer}>
            <Footer/> 
        </View> 
        
      </Aux> 
    )
}

export default activateAccountSuccess;

