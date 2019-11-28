import Colors from '../../constants/Colors';
import { Platform } from 'react-native';
import { scale, moderateScale, verticalScale} from '../Scale/Scale';

const styles = {
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      marginTop:scale(20),
  
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
    },
    
    contentContainer:{ 
        flex: 4,
        // justifyContent:'center',
        alignItems: 'center',
    },
    
    footerContainer:{ 
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingBottom: Platform.OS === "ios" ? verticalScale(5) : verticalScale(10),  
    },
    
  };
export default styles;