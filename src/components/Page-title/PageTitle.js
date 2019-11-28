import React from 'react';
import { View, Text } from 'react-native';
import Styles from './Style';

const pageTitle = props => (
    <View style={Styles.container}>
        <Text style={props.titleText}>{props.title}</Text>
    </View>
);

export default pageTitle;