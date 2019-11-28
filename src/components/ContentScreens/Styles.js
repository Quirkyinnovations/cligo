import Colors from '../../constants/Colors';
import { moderateScale, verticalScale,scale } from '../../Styling/Scale/Scale';
import { Platform } from 'react-native';

const styles ={
    
    container:{
       borderWidth:1,
       borderColor: Colors.white,
       width:moderateScale(340,0.3),
       height:Platform.OS === 'android' && Platform.Version >= 21 ?verticalScale(430,0.3) : verticalScale(420,0.3),
       borderRadius:10,
       backgroundColor:Colors.white,
       shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        alignItems: "center",
        paddingBottom:verticalScale(10)
    },
    headerContentScreen: { 
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconImageStyle:{
         width:46, 
         height:46
    },
    touchableOpacityStyle:{
        backgroundColor:Colors.green
    },
    titleStyles:{
        color:Colors.white
    },
    customButton:{
        borderColor: Colors.green
    }
    
}
export default styles;