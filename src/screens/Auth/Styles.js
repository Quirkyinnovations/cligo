import { Platform, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import { scale, moderateScale, verticalScale } from '../../Styling/Scale/Scale';

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
    
    footerText:{ 
        textAlign: "center",
        color:Colors.grayDark,
        fontSize:moderateScale(15)
    },
    
    title:{
        fontSize:moderateScale(20),
        fontWeight:'normal',
        color: Colors.grayDark,
        marginRight:scale(225),
    },
    
    titleAccount:{
        fontSize:moderateScale(20),
        fontWeight:'normal',
        color: Colors.grayDark,
        marginRight:scale(130),
    },
    
    clearButtonTextFloatLeft:{ 
        color: Colors.yellowDark,
        fontSize:moderateScale(16),
        marginRight:scale(135)
    },
    
    clearButtonText:{ 
        color: Colors.yellowDark,
        fontSize:moderateScale(16),
        fontWeight:'bold',
    },
    
    clearButtonTextFloatCenter:{
        color: Colors.yellowDark,
        fontSize:moderateScale(16),
        fontWeight:'bold',
        marginLeft:Dimensions.get('window').width / 3,
    },
    
    clearButtonTextAcount:{
        color: Colors.yellowDark,
        fontSize:moderateScale(16),
        fontWeight:'bold',
        paddingRight:0,
        paddingLeft:0
    },
    
    iconColor: Colors.grayLight,
    
    iconSIze: moderateScale(28,0.3),
    
    iconColorActive: Colors.green,
    
    iconStyle: { 
        paddingRight:5,
    },
    
    signupTitleContainer:{
        marginTop:scale(10)
    },
    signupTitle:{ 
        color:'#707070', 
        fontSize:moderateScale(16), 
        marginRight:scale(110)
    },
    
    activeAccountBox: {
        flexDirection:"row",
        justifyContent: "space-around",
        marginLeft:scale(70)

    }, 
    activeAccountTitleContainer:{
        marginTop:scale(10)
    },
    activeAccountTitle:{
        color:'#707070', 
        fontSize:moderateScale(16),
        marginBottom: verticalScale(10),
        marginRight:scale(30)
    },
    gridPad: { padding: 30 },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' },
    
    otpContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scale(35)
    },
    
    titleActiveSuccess:{ 
        color: Colors.grayDark,
        fontSize:moderateScale(25),
        paddingBottom: verticalScale(15),
        paddingTop:verticalScale(20)
    },
    activeSuccessTitle:{
        color: Colors.grayDark,
        fontSize:moderateScale(16), 
    },
    iconSuccessSTyle:{
        backgroundColor:Colors.white,
        color: Colors.green,
        fontSize:moderateScale(80),
    },
    iconExclamationSTyle:{
        color: Colors.redDark,
        fontSize:moderateScale(80), 
    },
    customButtonSearchProcess:{
        backgroundColor:Colors.green,
        borderColor:Colors.green,
    },
    customTitleBottomSearchProcess:{
        color: Colors.white
    },
    ActivityIndicatorColor:Colors.green

    
    
}

export default styles;