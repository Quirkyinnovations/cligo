import * as React from 'react';
import { 
    ScrollView, 
    Text, 
    TouchableOpacity, 
    ImageBackground, 
    Image,
    View,
    
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Background } from '../Images/ExportImage';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import styles from './Styles';

const Sidebar = props => {
    return (
        <ScrollView>
            <ImageBackground
                source={Background}
                style={{width: undefined, paddingTop:48,padding:18 }}
            >
                <Avatar
                    rounded
                    size="large"
                    title="NM"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    style={styles.profile}
                />
                <Text style={styles.name}>Nyira Web developer</Text>
                <View style={styles.subnameContainer}>
                    <Text style={styles.subname}>
                        mwalila@gmail.com
                    </Text>
                     <Icon  
                        name="email-check-outline"  
                        style={styles.iconStyle} />   
                </View>
            </ImageBackground>
            
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
                
                {/* <View style={{flex: 1,justifyContent:'flex-end'}}>
                    <Text>Legal v1.0.0</Text>
                </View> */}
            </View>
            
        </ScrollView>
    );
}

export default Sidebar;