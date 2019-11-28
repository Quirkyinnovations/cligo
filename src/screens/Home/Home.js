import React from 'react';
import { View , Text } from 'react-native';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import styles from './Styles';
import StatusBar from '../../components/StatusBars/StatusBarAuth';

const home = props => {
    // console.log(props);}
    return (
       <Aux> 
           <StatusBar />
           <View style={styles.logoContainer}>
               <Logo />
               <PageTitle 
                    title="Find a health  hospital near you"
                    titleText={styles.title}
                 />
           </View>
           
           <View style={styles.contentContainer}>
                <Button 
                    title="sign in" 
                    _onChangedHandler={() => {
                        props.navigation.navigate({routeName: 'Login'})
                    }}
                />
                <Button 
                    title="sign up"
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

export default home;