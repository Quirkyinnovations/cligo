import React from "react";
import { StatusBar } from 'react-native';
import styles from './Styles';
const status = () => {
    return <StatusBar 
                backgroundColor={styles.backgroundColor}
                barStyle='dark-content'
                hidden={true}
                
    />
}

export default status;
