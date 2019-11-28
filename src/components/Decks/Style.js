import { Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get("window").width;
const style = {
    cardStyle:{ 
        position: "absolute",
        width:SCREEN_WIDTH
    }
}

export default style;