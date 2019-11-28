import { Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { moderateScale, scale } from '../../Styling/Scale/Scale';

const styles ={
    logoContainer: {
        flex: 2,
        justifyContent:'flex-end',
        alignItems: 'center',
    },
    contentContainer:{ 
        flex: 3,
        justifyContent:'center',
        alignItems: 'center',
     },
    footerContainer:{ 
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingBottom: Platform.OS === "ios" ? scale(5) : scale(15),
       
     },
    title:{
        fontSize:moderateScale(15),
        fontWeight:'normal',
        color: Colors.grayDark,
        textAlign:'justify',
        textTransform:'uppercase'
    }
}

export default styles;