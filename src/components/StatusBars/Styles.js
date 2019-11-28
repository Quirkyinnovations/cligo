import Colors from '../../constants/Colors';
import { Platform } from 'react-native';

const styles = {
    backgroundColor:Platform.OS === 'ios' ? Colors.green : Colors.white,
}

export default styles