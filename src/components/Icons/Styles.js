import { moderateScale} from '../../Styling/Scale/Scale';
import Colors from '../../constants/Colors';

const styles = {
    container:{
        width: moderateScale(111), 
        height: moderateScale(111), 
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:0.2,
        borderRadius:100,
        borderColor:Colors.grayLight,
        opacity:'20%'
    },
    exclamationContainer:{
        width: moderateScale(111), 
        height: moderateScale(111), 
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:0.2,
        borderRadius:100,
        // backgroundColor:Colors.redLight,
        borderColor:Colors.redLight,
        opacity:0.8
    }
}
export default styles;