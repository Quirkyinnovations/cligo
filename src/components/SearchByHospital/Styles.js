import { moderateScale, verticalScale ,scale } from '../../Styling/Scale/Scale';
import Colors from '../../constants/Colors';

const styles={
    container: {
       width:moderateScale(87),
       height: verticalScale(88),
       backgroundColor:Colors.white,
       shadowColor: Colors.grayLight,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        margin:scale(5),
        
    },
    imageContainer:{ 
       alignItems: 'center',
       width:'100%',
       paddingTop:verticalScale(5)
    },
    titleContraire:{
        flex:1,
        justifyContent:'flex-end',
        paddingBottom:verticalScale(10),
        alignItems: 'center',
    },
    title:{ 
        color: Colors.grayDark,
        fontSize:moderateScale(16)
    },
    touchableOpacity:{ 
        width:'100%',
        height:'100%'
    },
    
    
}
export default styles;