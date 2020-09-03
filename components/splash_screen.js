import * as React from 'react';
import { Text, View, StyleSheet,Image,Dimensions,StatusBar  } from 'react-native';
let ScreenHeight = Dimensions.get("window").height;
let Screenwidth = Dimensions.get("window").width;
import DeviceInfo from 'react-native-device-info';
export default class Splash extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
      this.state = { id: '' }
    
   }
performTimeConsumingTask = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      2000
    )
  )
}

async componentDidMount() {
  // Preload data from an external API
  // Preload data using AsyncStorage
  const data = await this.performTimeConsumingTask();
  let deviceId = DeviceInfo.getDeviceId();
  this.setState({id: deviceId});
  if (data !== null) {
   // this.props.navigation.navigate('Signin');
  }
}

  render() 
  
  {

   const { text, onPress} = this.props;
   const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#7E194A" barStyle="light-content" />
      <Text>{this.state.id}</Text>
    <Image 
     style={styles.logo}
    source={(require('../assets/splash.png'))}
    />
   
   
  </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#003342',
    padding: 0,
  },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Screenwidth,
        height: ScreenHeight ,
    },
  });