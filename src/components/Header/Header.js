import React from 'react';
import { View, } from 'react-native';
import { Header } from 'react-native-elements';

import styles from './Styles';

const header = props => {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: styles.colorIcon }}
            centerComponent={{ text: props.titleCenter, style: styles.colorTitleCenter }}
            rightComponent={{ icon: props.rightComponent, color: styles.colorIcon }}
            containerStyle={styles.containerStyle}
        />
        
    );
}

export default header;
