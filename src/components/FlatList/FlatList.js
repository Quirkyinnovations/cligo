import React , { Component } from "react";
import { FlatList, } from 'react-native';
import { Button,Text } from 'react-native-elements';
import Aux from '../../hoc/Aux';

const FlatListComponent = (props) => {
   return (
    <Aux key={props.key}>
        <FlatList
            data={props.data}
            renderItem={props.renderItem}
            keyExtractor={props.keyExtractor}
        
        >
            <Button 
                title="FlatList"
            />
            
         </FlatList>  
    </Aux>
   
   );
}

export default FlatListComponent;