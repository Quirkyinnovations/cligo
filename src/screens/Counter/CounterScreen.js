import React, {useState} from 'react';
import { View, Text,ScrollView } from 'react-native';
import Button from '../../components/Buttons/Button';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    const [colors, setColors] = useState([]);
    
    return (
        <View>
            <ScrollView>
                <Button 
                    title="Increase counter" 
                    _onChangedHandler={() => {
                        setCounter(counter + 1);
                    }}
                />
                
                <Button 
                    title="Desincrease counter"
                    _onChangedHandler={() =>{
                        setCounter(counter - 1);
                    }}
                />
                <Text> Current count: {counter} </Text>
            
                <Button title="Add Color" />
                <View 
                    style={{ height:100, width:100, backgroundColor:randomRgb() }}> 
                </View> 
                
            </ScrollView>
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red},${green},${blue})`;
};

export default CounterScreen;