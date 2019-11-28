import { Dimensions } from 'react-native';
const styles ={
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    },
    mapLoadedContainer:{
        flex:1,
        justifyContent:'center'
    }
}
export default styles;