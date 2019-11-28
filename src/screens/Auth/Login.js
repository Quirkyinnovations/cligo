import React from 'react';
import { View  } from 'react-native';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import ClearButton from '../../components/Buttons/ClearButton';
import TextInput from '../../components/Inputs/Input';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import styles from './Styles';
import StatusBar from '../../components/StatusBars/StatusBarAuth';

const login = props => {
    // const [value,onChangeText] = React.useState('Email or mobile');
    return (
        <Aux> 
            <StatusBar />
            <View style={styles.logoContainer}>
                <Logo />
               
            </View>
        
            <View style={styles.contentContainer}>
                
                <PageTitle 
                    title="sign in"
                    titleText={styles.title}
                />
                <ClearButton 
                    title=" Back "
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Home'})
                    }}
                    clearButtonText={styles.clearButtonText}
                />
                
                <TextInput   
                    placeholder="Email or mobile"
                    onChangeText={(text) => onChangeText(text)}
                    returnKeyType='next'
                    keyboardType='numeric'
                    maxLength={60}
                    // value={value}
                />
                
                <TextInput
                   placeholder="Password"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='send'
                   keyboardType='default'
                   maxLength={12}
                //    value={value}  
                />
                
                <ClearButton 
                    title="Forgot Password ?"
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'ForgotPassword'})
                    }}
                    clearButtonText={styles.clearButtonTextFloatLeft}
                />
                
                <Button 
                    title="sign in" 
                    _onChangedHandler={() => {
                       alert('username : ' + value + 'password : ' + onChangeText);
                    }}
                />
                
                <ClearButton 
                    text="Don't you have an account?"
                    title=" Create "
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Signup'})
                    }}
                    clearButtonText={styles.clearButtonText}
                />
                
            </View>
        
            <View style={styles.footerContainer}>
                <Footer/> 
            </View>
        </Aux>
    );
}

export default login;