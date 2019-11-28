import {Dimensions} from "react-native";
import { moderateScale,scale, verticalScale} from '../../Styling/Scale/Scale';
import Colors from '../../constants/Colors';

const styles = {
    container: {
      width:'80%',
      minWidth:moderateScale(300,0.3),
      maxWidth:'95%',
      height:'10%',
      minHeight: moderateScale(40,0.3),
      maxHeight:moderateScale(53,0.3),
      marginTop:scale(20),
      paddingLeft:scale(10),
      borderWidth:1,
      borderRadius:10,
      backgroundColor:Colors.white,
      borderColor:Colors.yellowDark,
      justifyContent: 'center',
    },
    textInput:{
      color:Colors.grayDark,
      fontSize:moderateScale(16)
    },
    placeholderColor: Colors.grayLight,
    
    selectionTintColor: Colors.grayDark,
    
    OtpInputcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    cell: {
      paddingVertical: verticalScale(17),
      width: moderateScale(45),
      height:moderateScale(66),
      margin: scale(8),
      textAlign: 'center',
      fontSize: moderateScale(23),
      color: Colors.grayDark,
      borderWidth: 1.5, 
      borderRadius:10
    }
}

export default styles;