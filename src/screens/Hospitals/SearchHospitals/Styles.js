import { moderateScale, verticalScale,scale } from '../../../Styling/Scale/Scale';
import Colors from '../../../constants/Colors';

const styles = {
    textStyle:{
        fontSize: moderateScale(20,0.4),
     },
    iconStyle:{ 
        color:Colors.white
    },
    container:{
        backgroundColor:Colors.grayLight,
        flex:1
    },
    titleBoxContainer:{
        width:moderateScale(335,0.3),
        height:moderateScale(65.5,0.3),
        borderColor:Colors.white,
        borderWidth:0.5,
        borderRadius:50,
        padding:verticalScale(10),
        flexDirection:'row',
        justifyContent: 'space-around'
        
    },
    titleBoxStyle:{
        color:Colors.white,
        fontSize:moderateScale(14), 
        textAlign:'center', 
    },
    titleBoxRightBorder:{
        borderRightWidth:1,
        borderRightColor:Colors.white,
        paddingLeft:verticalScale(5),
        paddingRight:verticalScale(5),  
    },
    subTitleBoxContainer:{
        
    },
    subTitleBoxStyle:{
        
    },
   

}

export default styles;