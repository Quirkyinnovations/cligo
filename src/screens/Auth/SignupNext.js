import React, { useState }from 'react';
import { View, Text  } from 'react-native';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import ClearButton from '../../components/Buttons/ClearButton';
import TextInput from '../../components/Inputs/Input';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import styles from './Styles';
import StatusBar from '../../components/StatusBars/StatusBarAuth';
import Icon from '@expo/vector-icons/FontAwesome';

const signupStep2 = props => {
    // const [value,onChangeText] = React.useState('Email or mobile');
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
                    title="Back "
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Signup'})
                    }}
                    clearButtonText={styles.clearButtonText}
                />
                
                <TextInput   
                    placeholder="Physical Address"
                    onChangeText={(text) => onChangeText(text)}
                    returnKeyType='next'
                    keyboardType='default'
                    maxLength={100}
                    // value={value}
                />
                
                <TextInput
                   placeholder="Password"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='next'
                   keyboardType='default'
                   secureTextEntry={true}
                   maxLength={13}
                //    value={value}  
                />
                
                <TextInput
                   placeholder="Confirm Password"
                   onChangeText={(text) => onChangeText(text)}
                   secureTextEntry={true}
                   returnKeyType='next'
                   keyboardType='default'
                   maxLength={50}
                //    value={value}  
                />
                
                <View style={styles.signupTitleContainer}>
                    <Text style={styles.signupTitle}>Send activation code via:</Text>
                </View>
                
               <View style={styles.activeAccountBox}>
                   
                    <ClearButton
                        text="Email "
                        _onChangedHandler={() => {
                            alert('Activation code send to mwalila@gmail.com')
                        }}
                        clearButtonText={styles.clearButtonText} 
                        icon={
                            <Icon
                                name="toggle-on"
                                size={styles.iconSIze}
                                color={styles.iconColor}
                                style={styles.iconStyle}
                                
                            />
                        }
                    />
                        
                    <ClearButton
                        text="Mobile "
                        _onChangedHandler={() => {
                            alert('Activation code send to 0485364748')
                        }}
                        clearButtonText={styles.clearButtonText} 
                        icon={
                            <Icon
                                name="mobile-phone"
                                size={styles.iconSIze}
                                color={styles.iconColor}
                                style={styles.iconStyle}
                            />
                        }
                    />
               </View>
                
                <Button 
                    title="sign in" 
                    _onChangedHandler={() => {
                       props.navigation.navigate({routeName: 'ActivateAccount'})
                    }}
                />

            </View>
        
            <View style={styles.footerContainer}>
                <Footer/> 
            </View>
        </Aux>
    );
}

export default signupStep2;