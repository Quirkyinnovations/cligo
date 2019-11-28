import React from 'react';
import { Text, View } from 'react-native';
import OTPInput from '../../components/Inputs/OtpInput';
import Colors from '../../constants/Colors';
import Aux from '../../hoc/Aux';
import Button from '../../components/Buttons/Button';
import ClearButton from '../../components/Buttons/ClearButton';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import PageTitle from '../../components/Page-title/PageTitle';
import styles from './Styles';
import StatusBar from '../../components/StatusBars/StatusBarAuth';
 
export default class App extends React.Component {
 
  state = {
    otp: ''
  }
 
  handleOTPChange = (otp) => {
    this.setState({ otp })
  }
 
  clearOTP = () => {
    this.setState({ otp: undefined })
  }
 
  autoFill = () => {
    this.setState({ otp: '22119' })
  }
 
  render() {
    let errorMessage = null;
    
    if (this.state.opt < 5) {
      errorMessage = (<View>
        <Text>invalid OPT. Your opt must contain 5 numbers</Text>
      </View>)
    }
    return (
      <Aux> 
        <StatusBar />
        <View style={styles.logoContainer}>
            <Logo />    
        </View>
        
        <View style={styles.contentContainer}> 
        
          <PageTitle 
            title="verify your account"
            titleText={styles.titleAccount}
          />
          
          <View style={styles.activeAccountTitleContainer}>
            <Text style={styles.activeAccountTitle}>enter the OPT sent into your account</Text>
          </View>
            
          <View style={styles.otpContainer}>

            <OTPInput
              value={this.state.otp}
              onChange={this.handleOTPChange}
              tintColor={Colors.green}
              offTintColor={Colors.yellowDark}
              otpLength={5}
            />
            {errorMessage}
            
            <View style={styles.activeAccountBox}>      
              <ClearButton
                  title="Auto fill "
                  _onChangedHandler={() => this.autoFill()}
                  clearButtonText={styles.clearButtonText} 
              />     
              <ClearButton
                  title="clear "
                  _onChangedHandler={() => this.clearOTP()} 
                  clearButtonText={styles.clearButtonText} 
              />
            </View>
            
          </View>
            
          <Button 
              title="verify" 
              _onChangedHandler={() => {
                  this.props.navigation.navigate({routeName: 'ActivateSuccess'})
              }}
          />
          <ClearButton 
              title="Back"
              _onChangedHandler={() => {
                  this.props.navigation.navigate({routeName: 'ActivateFailed'})
              }}
              clearButtonText={styles.clearButtonTextFloatCenter}
          />

        </View>
        
        <View style={styles.footerContainer}>
            <Footer/> 
        </View> 
      </Aux> 
    );
  }
}
