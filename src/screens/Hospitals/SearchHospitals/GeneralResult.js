import React, { Component } from 'react';
import { SafeAreaView, View , Text, Dimensions } from 'react-native';
import { MaterialHeaderButtons, Item} from '../../../components/HeaderButtons/HeaderButton';

import styles from './Styles';

import MapView from '../../../components/MapView/MapView';

const {width,height} = Dimensions.get("window");

const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;

const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

class GeneralResult extends Component{ 
  state = {
    region:{
      latitude:-33.8049792,
      longitude:18.5106989,
      latitudeDelta:LATITUDE_DELTA,
      longitudeDelta:LONGITUDE_DELTA
    },
    mapLoaded:false
  };
  
  componentDidMount(){
    this.setState({mapLoaded:true});
  };
  
  _onRegionChangeComplete = (region) => {
    this.setState({region});
  }
  
  render() {
    
    let points = [];
    for (let i=0; i < 20; i++) {
      if (i % 2 === 0) {
        points.push({
          latitude:this.state.region.latitude + i * 0.001,
          longitude:this.state.region.longitude + i * 0.001
        });
        
      } else {
        points.push({
          latitude:this.state.region.latitude - i * 0.002,
          longitude:this.state.region.longitude + i * 0.001
        });
      }
      
    };
    
    return (
      <SafeAreaView style={{flex:1}}>
          <MapView 
            onRegionChangeComplete={this._onRegionChangeComplete}
            mapLoaded={this.state.mapLoaded}
            region={this.state.region}
            points={points}
          />
      </SafeAreaView>
    );
  }
}

GeneralResult.navigationOptions = (navigationData) => {
    // const id = navigationData.navigation.getParam('searchById');
    // const selectSearchBy = Hospitals.find(hos => hos.id == id);
    // console.log(navigationData);
    
    return { 
      // headerStyle:{
      //   backgroundColor:Colors.green,
      //   opacity:0
      // },
      headerLeft: (
        <MaterialHeaderButtons>
          <Item 
            title="menu" 
            iconName="menu" 
            color="red"
            onPress={() => {
              navigationData.navigation.toggleDrawer();
              // alert('menu clicked!')
            }} 
          />
        </MaterialHeaderButtons>),
      // headerTintColor:Colors.white,
      // headerTitle:'Find a health near you',
    }
  }

export default GeneralResult;