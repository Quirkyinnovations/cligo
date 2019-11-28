import React from 'react';
import { View, Text } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import styles from './Styles';

const TitleBox = props => {
    return (
        <View style={styles.container}>
            <View style={props.titleBoxContainer}>
                <Icon 
                    name={props.iconLocation}
                    size={styles.iconSize}
                    style={props.iconStyle}
                 />
                <View style={props.titleBoxRightBorder}>
                    <Text style={props.titleBoxStyle}>
                        {props.title}{"\n"}
                        {props.currentLocation}
                    </Text>
                </View>
                <Icon 
                    name={props.iconChevron}
                    size={styles.iconSize}
                    style={props.iconStyle}
                />
            </View>
            <View style={props.subTitleBoxContainer}>
                <Text style={props.subTitleBoxStyle}>
                    {props.subTitle}
                </Text>
            </View>
        </View>
    );
}

export default TitleBox;