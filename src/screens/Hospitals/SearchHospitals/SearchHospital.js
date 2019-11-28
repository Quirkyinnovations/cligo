import '../../../_mockLocation';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, Alert, Text} from 'react-native';
import styles from './Styles';
import Colors from '../../../constants/Colors'
import MainStyles from '../../../Styling/Styles/Main';
import TitleBox from '../../../components/TitleBox/TitleBox';
import ContentScreen from '../../../components/ContentScreens/ContentScreen';
import { MaterialHeaderButtons, Item} from '../../../components/HeaderButtons/HeaderButton';

import { requestPermissionsAsync, Accuracy, watchPositionAsync} from 'expo-location';


const SearchHospital = (props) => {
  // const catId = props.navigation.getParam('searchById');
  // const selectSearchBy = Hospitals.find(hos => hos.id === catId);
  
  const [err, setErr] = useState(null);
  
  const startWatching = async () => {
    try {
      
      await requestPermissionsAsync();
      
    } catch (e) {
      
      setErr(e);
    }
  }
  
  useEffect(() => {
    startWatching();
  },[]);
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        
        <View style={MainStyles.headerContainer}>
            <TitleBox
              titleBoxContainer={styles.titleBoxContainer}
              titleBoxStyle={styles.titleBoxStyle}
              subTitleBoxContainer={styles.subTitleBoxContainer}
              subTitleBoxStyle={styles.subTitleBoxStyle}
              iconLocation="location-arrow"
              title="Love Life Centre, Rose Innes Street …"
              currentLocation="current location"
              iconChevron="chevron-down"
              iconStyle={styles.iconStyle}
              titleBoxRightBorder={styles.titleBoxRightBorder}
              
            />
        </View>
        
        {err ? Alert.alert('Location','Please enable location services',[{text: 'Okay'}]): null }
          
        <View style={MainStyles.contentContainer}>
          <ContentScreen 
            _onChangedHandler={() => props.navigation.navigate({routeName: 'GeneralResult'})}
          />
        </View>
          
      </View>
    </SafeAreaView>
      
  );  
}

SearchHospital.navigationOptions = (navigationData) => {
  // const id = navigationData.navigation.getParam('searchById');
  // const selectSearchBy = Hospitals.find(hos => hos.id == id);
  // console.log(navigationData);
  
  return { 
    headerStyle:{
      backgroundColor:Colors.green
    },
    headerLeft: (
      <MaterialHeaderButtons>
        <Item 
          title="menu" 
          iconName="menu" 
          onPress={() => {
            navigationData.navigation.toggleDrawer();
            // alert('menu clicked!')
          }} 
        />
      </MaterialHeaderButtons>),
    headerTintColor:Colors.white,
    headerTitle:'Find a health near you',
  }
}

export default SearchHospital;