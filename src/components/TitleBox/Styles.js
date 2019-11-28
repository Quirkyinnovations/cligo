import { Dimensions,Platform } from 'react-native'
import Colors from '../../constants/Colors';
import { moderateScale, scale, verticalScale} from '../../Styling/Scale/Scale';

const styles = {
    
    container: {
        backgroundColor: Colors.green,
        borderWidth:0,
        width:Dimensions.get('window').width,
        borderColor:Colors.white,
        height: Dimensions.get('window').height / 4,
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingTop:scale(10),
        alignItems:'center',
    },
    iconSize:moderateScale(25),
    
}

export default styles;