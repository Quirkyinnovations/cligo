import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform, Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './Styles';

import Sidebar from '../components/Sidebar/Sidebar';

//import screens
import HomeScreen from '../screens/Home/Home';
import LoginScreen from '../screens/Auth/Login';
import SignupScreen from '../screens/Auth/Signup';
import SignupNextScreen from '../screens/Auth/SignupNext';
import ActivateAccountScreen from '../screens/Auth/ActivateAccount';
import ActivateAccountFailedScreen from '../screens/Auth/ActivateFailed';
import ActivateAccountSuccessScreen from '../screens/Auth/ActivateSuccess';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';
import SearchHospitalsScreen from '../screens/Hospitals/SearchHospitals/SearchHospital';
import SettingsScreen from '../screens/Settings/Setting';
import AppointmentScreen from '../screens/Patients/Appointments/Appointment';
import SearchProcessScreen from '../screens/Auth/SearchProcess';
import GeneralResultScreen from '../screens/Hospitals/SearchHospitals/GeneralResult';
import CounterScreen from '../screens/Counter/CounterScreen';


const defaultStackConfig = {
    headerStyle:{
        backgroundColor:styles.backgroundColor
    },
    headerTintColor:styles.headerTintColor,
    headerTitle:'Cligo QS'
};

const AuthNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen:LoginScreen,
        navigationOptions: {
            header: null,
        },
    },
    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            header: null,
        },
    },
    SignupNext: {
        screen: SignupNextScreen,
        navigationOptions: {
            header: null,
        },
    },
    ActivateAccount: {
        screen:ActivateAccountScreen,
        navigationOptions: {
            header: null,
        },
    },
    ActivateSuccess: {
        screen: ActivateAccountSuccessScreen,
        navigationOptions: {
            header: null,
        },
    },
    ActivateFailed: {
        screen: ActivateAccountFailedScreen,
        navigationOptions: {
            header: null,
        },
    },
    ForgotPassword: { 
        screen:ForgotPasswordScreen,
        navigationOptions: {
            header: null,
        },
    },
    ResetPassword: { 
        screen: ResetPasswordScreen,
        navigationOptions: {
            header: null,
        },
    },
    SearchProcessLoading:{
        screen:SearchProcessScreen,
        navigationOptions: {
            header: null,
        },
    }

},{
    initialRouteName: 'Home',
    defaultNavigationOptions: defaultStackConfig    
});

const SearchHospitalsStackNavigator = createStackNavigator({
    SearchHospitals: {
        screen:SearchHospitalsScreen, 
    },
    GeneralResult:{
        screen:GeneralResultScreen,navigationOptions: {
            header:null
        }
    },
    Counter:{
        screen:CounterScreen,navigationOptions: {
            
        }
    }
},{
    // initialRouteName: 'SearchHospitals',
    defaultNavigationOptions: defaultStackConfig
});

const AppointmentStackNavigator = createStackNavigator({
    Appointment:AppointmentScreen,
},{
    defaultNavigationOptions: defaultStackConfig
});

const SettingsStackNavigator = createStackNavigator({
    Settings: SettingsScreen,
},{
    defaultNavigationOptions: defaultStackConfig
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen:SearchHospitalsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Icon  
                    name="crosshairs-gps"
                    style={styles.iconStyle}
                    color={tabInfo.tintColor}  />
            }
        }
    },
    Appointment:{
        screen:AppointmentStackNavigator,
        navigationOptions: {
            tabBarIcon:(tabInfo) => {
                return <Icon  
                    name="calendar-clock"  
                    style={styles.iconStyle} 
                    color={tabInfo.tintColor} />
            }
        }
    },
    Settings:{
        screen:SettingsStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Icon  
                        name="settings-outline" 
                        style={styles.iconStyle}
                        color={tabInfo.tintColor} 
                    />
            }
        }
    },
    
},{
    tabBarOptions:{
        activeTintColor:styles.activeTintColor
    }
});

const MainNavigator = createDrawerNavigator({
    Hospital:{
        screen:TabNavigator, navigationOptions: {
            drawerLabel:'Search Hospital',
            drawerIcon:({tintColor}) => Platform.OS === 'ios' ?<Ionicons name="ios-search" color={tintColor} style={styles.iconStyle}/> :<Ionicons name="md-search" color={tintColor} style={styles.iconStyle}/>
        }
    },
    MyAppointment:{
        screen:AppointmentStackNavigator,navigationOptions:{
            drawerLabel:'My Appointment',
            drawerIcon:({tintColor}) =><Icon name="timetable" color={tintColor} style={styles.iconStyle}/>
        }
    },
    setting:{
        screen:SettingsStackNavigator,navigationOptions: {
            drawerLabel:'Settings',
            drawerIcon:({tintColor}) => Platform.OS === 'ios' ?<Ionicons name="ios-settings" color={tintColor} style={styles.iconStyle}/> :<Ionicons name="md-settings" color={tintColor} style={styles.iconStyle}/>
        }
    },
    Auth:{
       screen:AuthNavigator,navigationOptions: {
            drawerLabel:'Sign Out',
            drawerIcon:({tintColor}) =><AntDesign name="logout" color={tintColor} size={23}/>
        }
    },
    Counter:{
        screen:CounterScreen,navigationOptions:{
            drawerLabel:'Counter',
        } 
    }
},{
    contentOptions:{
        activeTintColor:styles.activeTintColor,
        inactiveLabelStyle:styles.inactiveLabelStyle,
        labelStyle:styles.labelStyle,
        drawerType:'slide'
    },
    contentComponent: props => <Sidebar {...props} />, 
    drawerWidth:Dimensions.get('window').width * 0.85,
    // hideStatusBar:true
});

export default createAppContainer(MainNavigator);