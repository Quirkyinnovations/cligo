import React from 'react';
import { View , Image} from 'react-native';
import Styles from './Style';

const logos = require('../../../assets/img/logo.png');


const logo = props => (
    <View>
        <Image source={logos} style={Styles.logo}/>
    </View>
);
export default logo;