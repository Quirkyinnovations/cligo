import React , { Component } from "react";
import { Card, Button,Text} from 'react-native-elements';
import Aux from '../../hoc/Aux';

const card = (props) => {
   return (
    <Aux key={props.key}>
        <Card
            image={{uri: props.uri}}
            title={props.title}
        
        >
            {props.children}
            
         </Card>  
    </Aux>
   
   );
}

export default card;