import * as React from 'react';
import { HeaderButton,HeaderButtons } from 'react-navigation-header-buttons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

const MaterialHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={MaterialIcons}
            iconSize={25}
            color={Colors.white}
        />
    );
}
export const MaterialHeaderButtons = props => {
    return (
      <HeaderButtons
        HeaderButtonComponent={MaterialHeaderButton}
        OverflowIcon={<MaterialIcons name="menu" size={25} color="white" />}
        {...props}
      />
    );
  };
export { Item } from 'react-navigation-header-buttons';

