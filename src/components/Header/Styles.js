import { Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const styles = {
    container:{
        borderWidth:0,
        backgroundColor:Colors.green,
        height: Dimensions.get('window').height / 3,
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
       
    },
    containerStyle:{
        backgroundColor: Colors.green,
        borderWidth:0,
        borderColor:Colors.green
    },
    colorTitleCenter: {
        color:Colors.white
    },
    colorIcon:Colors.white,
    
}
export default styles;