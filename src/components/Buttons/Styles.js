import { Platform } from 'react-native';
import Colors from '../../constants/Colors';
import { moderateScale, scale } from '../../Styling/Scale/Scale';

const style = {
    buttonContainer:{
      width:'80%',
      minWidth:moderateScale(300,0.3),
      maxWidth:'95%',
      height:'15%',
      minHeight: moderateScale(50,0.3),
      maxHeight:moderateScale(53,0.3),
      marginTop:scale(20),
      borderWidth:1,
      borderRadius:100,
      backgroundColor:Colors.white,
      borderColor:Colors.yellowDark,
      justifyContent: 'center',
      elevation:2,
    },
    
    buttonText:{ 
      color: Platform.OS === 'ios' ? Colors.grayDark : Colors.grayDark,
      fontSize:moderateScale(18),
    },
    
    clearButtonContainer:{
      flexDirection:'row',
      width:'80%',
      minWidth:moderateScale(300,0.3),
      maxWidth:'95%',
      height:'10%',
      minHeight: moderateScale(40,0.3),
      maxHeight:moderateScale(53,0.3),
      marginTop:scale(2),
      backgroundColor:Colors.white,
      justifyContent: 'flex-start',
    },

    clearText: { 
      color: Colors.yellowDark,
      fontSize:moderateScale(16),
      marginTop:scale(10),
     textAlign:'justify'
      
    },
    
    smallBtnContainer: {
      flex: 1,
      flexDirection: "row",
      alignSelf: "flex-end",
      marginRight:scale(35),
      marginTop:scale(20),
    },
    
    smallBtn: {
      width:'25%',
      minWidth:moderateScale(100,0.3),
      maxWidth:'30%',
      height:'15%',
      minHeight: moderateScale(50,0.3),
      maxHeight:moderateScale(53,0.3),
      borderWidth:1,
      borderRadius:100,
      backgroundColor:Colors.white,
      borderColor:Colors.yellowDark,
      elevation:2,
    },
    
    iconColor: Colors.grayLight,
    
    iconSIze: moderateScale(28,0.3),
    
    activationButtonContainer:{
      width:'15%',
      minWidth:moderateScale(50,0.3),
      maxWidth:'20%',

    },
    activationText:{
      color:Colors.grayDark,
      fontSize:moderateScale(16),
    }
    
}
export default style;