import React, { useState }from 'react';
import { View  } from 'react-native';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/SmallButton';
import ClearButton from '../../components/Buttons/ClearButton';
import TextInput from '../../components/Inputs/Input';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import styles from './Styles';
import StatusBar from '../../components/StatusBars/StatusBarAuth';

const signup = props => {
    
    return (
        <Aux> 
            <StatusBar />
            <View style={styles.logoContainer}>
                <Logo />
                
            </View>
        
            <View style={styles.contentContainer}>
                
                <PageTitle 
                    title="sign up"
                    titleText={styles.title}
                />
                
                <ClearButton 
                    text="Don't you have an account?"
                    title="Login in "
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Login'})
                    }}
                    clearButtonText={styles.clearButtonText}
                />
                
                <TextInput   
                    placeholder="Full Name"
                    onChangeText={(text) => onChangeText(text)}
                    returnKeyType='next'
                    keyboardType='default'
                    maxLength={50}
                    // value={value}
                />
                
                <TextInput
                   placeholder="ID Number"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='next'
                   keyboardType='default'
                   maxLength={13}
                //    value={value}  
                />
                
                <TextInput
                   placeholder="Email Address"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='next'
                   keyboardType='email-address'
                   maxLength={50}
                //    value={value}  
                />
                
                <TextInput
                   placeholder="Mobile Number"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='next'
                   keyboardType='phone-pad'
                   maxLength={50}
                //    value={value}  
                />
                
                <Button 
                     _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'SignupNext'});
                     }}
                />

            </View>
        
            <View style={styles.footerContainer}>
                <Footer/> 
            </View>
        </Aux>
    );
}

export default signup;