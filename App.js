import React, {useState }from 'react';
import Aux from './src/hoc/Aux';
import Main from './src/App';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import CligoNavigator from './src/navigation/CligoNavigator';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/NotoSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    'open-sans-bold-italic': require('./assets/fonts/NotoSans-BoldItalic.ttf'),
    'open-sans-italic': require('./assets/fonts/NotoSans-Italic.ttf')
  })
}

export default function App(){
  
  const [fontLoaded, setFontLoaded] = useState(false);
  
  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }
    return (
      <Aux>
        <CligoNavigator />
      </Aux>
    );
    
};
