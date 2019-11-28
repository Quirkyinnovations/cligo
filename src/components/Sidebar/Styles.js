import Colors from '../../constants/Colors';
import { Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from '../../Styling/Scale/Scale';

const styles = {
    container:{
        flex: 1,
    },
    profile:{
        width:moderateScale(80),
        height:Platform.OS === 'ios' ? verticalScale(65) : verticalScale(85),
        borderRadius:40,
        borderWidth:3,
        borderColor:Colors.white,
        textAlign: "center",
    },
    name:{
        fontWeight:'400',
        marginVertical:verticalScale(8),
        color:Colors.white,
        fontSize:moderateScale(16)  
    },
    subnameContainer:{
       flexDirection: "row",
    },
    subname:{
        fontSize:moderateScale(14),
        color:'rgba(255,255,255,0.8)',
        marginRight:4
    },
    iconStyle:{
        color: 'rgba(255,255,255,0.8)',
        fontSize:moderateScale(20)
    }
};

export default styles;