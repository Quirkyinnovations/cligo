import React from 'react';
import { FlatList, View, Text } from 'react-native';

const ListItems = props => {
    const hospitals =[
        {name:'Somerset'},
        {name:'Dunoon'},
        {name:'Helderberg Hospital'},
        {name:'Netcare Kuilsriver Hospital'},
        {name:'D.P. Marais Hospital'}
    ];
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={hospitals = hospitals.name}
            data={hospitals}
            renderItem={({ item }) => { 
                return <Text style={{marginVertical:50}}>{item.name}</Text>
            }}
        />
    );
}

export default ListItems;