import React from 'react';
import { View } from 'react-native';
import styles from './Styling/Styles/Main';
import Deck from './components/Decks/Deck';
import Card from './components/Cards/Card';
import Aux from './hoc/Aux';
import { Button,Text} from 'react-native-elements';
import SearchHospital from './screens/Hospitals/SearchHospitals/SearchHospital';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];



class App extends React.Component{
  
  constructor(props) {
    super(props);
    // this.state = {
    //   region:{
    //     latitude:-33.8049792,
    //     longitude:18.5106989,
    //     latitudeDelta:0.09,
    //     longitudeDelta:0.04
    //   }
    // }
  }
   
  componentDidMount(){
      // console.log(Dimensions.get('window').width);
  }

  
  renderCard (item) {
    return (
      <Aux key={item.id}>
        <Card 
          uri={item.uri}
          title={item.text} 
        >
          <Text style={{marginBottom:10}} h4>
              I can customize the card further! 
            </Text>
            <Button 
                title='View Now!'
                icon={{name: 'code'}}
                backgroundColor="#43ac95"
                
            />
        </Card>
      </Aux>
    );
  }
  
  renderNoMorCards () {
   return (
    <Aux>
      <Card title="All done!">
          <Text style={{marginBottom:10}}>
                There's no more content here!
          </Text>
          <Button 
                title='Get More'
                icon={{name: 'code'}}
                backgroundColor="#43ac95"
            />
      </Card>
    </Aux>
   )
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        {/* <Deck
          data={DATA}
          renderCard = {this.renderCard}
          renderNoMorCards = {this.renderNoMorCards}
          onSwipeRight={() => console.log('Something was swipped right!')}
          onSwipeLeft={() => console.log('Something was swipped left')}
        /> */}
        <SearchHospital />
      </View>
    );
  }
  
}

export default App;

