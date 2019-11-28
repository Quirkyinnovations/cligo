import { moderateScale } from '../Styling/Scale/Scale';
import Colors from '../constants/Colors';

const styles ={
    iconStyle:{
        fontSize: moderateScale(25),
        // color: Colors.grayLight
        
    },
    activeTintColor:Colors.green,
    backgroundColor: Colors.green,
    headerTintColor: Colors.white,
    activeTintColor: Colors.green,
    labelStyle:{ 
        fontSize: moderateScale(16),
        fontWeight:'bold',
        
    },
    inactiveLabelStyle:{
       color:Colors.grayDark 
    }
}
export default styles;