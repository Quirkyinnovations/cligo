import React from 'react';
import {View, Text } from 'react-native';
import styles from './Style';

const footer = props => {
    return <View style={styles.container}>
        <Text style={styles.footerText}>{'\u00A9'} {new Date().getFullYear()} cligo  all rights reserved</Text>
    </View>
};

export default footer;