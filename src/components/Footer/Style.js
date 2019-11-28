import Colors from '../../constants/Colors';
import { moderateScale, } from '../../Styling/Scale/Scale';
const style = {
    container:{
        maxWidth:'95%',
        minWidth:'80%',
        width:moderateScale(300,0.3),
        
    },
    footerText:{ 
        textAlign: "center",
        color:Colors.grayDark,
        fontSize:moderateScale(15)
    },
}
export default style;