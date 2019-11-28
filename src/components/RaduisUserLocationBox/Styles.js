import { moderateScale, verticalScale ,scale } from '../../Styling/Scale/Scale';
import Colors from '../../constants/Colors';
import { Platform } from 'react-native';

const styles={
    container: {
        width:moderateScale(248),
        height: verticalScale(183),
        borderWidth:0.2,
        borderColor:Colors.grayLight,
        borderRadius:50,
        marginBottom:verticalScale(30),
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: "row",
        padding:scale(15)
        
    },
    raduisView1:{
        width:moderateScale(120),
        backgroundColor:Colors.green,
        height: verticalScale(110),
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:200
    },
    radiusView2:{ 
        backgroundColor:Colors.white,
        borderWidth:1,
        borderColor:Colors.white,
        borderRadius:100,
        width: moderateScale(70),
        height:Platform.OS === 'android' ? verticalScale(65) : verticalScale(60)
    },
    raduisContainer:{
        position:'relative'
    },
    raduisTitleStyle:{
        fontWeight:'bold',
        fontSize:moderateScale(16),
        color: Colors.grayDark
    },
    raduisContainerLeft:{
        position:'absolute',
        left:moderateScale(-45),
        top:verticalScale(-10)
    },
    raduisContainerTop:{
        position:'absolute',
        top:verticalScale(-80),
        left:moderateScale(45)
    },
    raduisContainerRight:{
        position:'absolute',
        left:moderateScale(10),
        top:verticalScale(-10)
    },
    raduisContainerBottom:{
        position:'absolute',
        top:verticalScale(60),
        right:moderateScale(45)
    },
    
    
}
export default styles;