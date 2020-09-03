import * as React from 'react';
import {  Text, View, StyleSheet, Image, Dimensions, StatusBar, AsyncStorage ,alert} from 'react-native';
let ScreenHeight = Dimensions.get("window").height;
let Screenwidth = Dimensions.get("window").width;
import DeviceInfo from 'react-native-device-info';
import { NavigationEvents } from 'react-navigation';
export default class Splash extends React.Component {
  static navigationOptions = { header: null };

  constructor (props) {
    super(props);

    this.state = { auth: '',
  login:'' }

  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }


  async componentDidMount() {
    //AsyncStorage.getItem('Auth').then((value) => this.setState({ auth: value }))
    AsyncStorage.getItem('login').then((value) => this.setState({ login: value }))
    const data = await this.performTimeConsumingTask();
    
    let deviceId = DeviceInfo.getDeviceId();
  
      var authc = this.state.auth;

      if (this.state.login == 'true') {
       
          this.props.navigation.navigate('Dashboard');
        
      } 
      else if(!this.state.login||this.state.login=="false")
      {
       //alert("gg");
      
        fetch('https://amaapi.qayad.com/api/', {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mode: "3xSFEE0twPC3LJZIs/F98Q==",
            andid: deviceId,
  
  
          })
        }).then((response) => response.json())
          .then((responseJson) => {
            
            // this.setState({status:customername.status});
            if (responseJson[ 0 ].status == 'false') {
              //alert(responseJson[0].status);
              //this.props.navigation.navigate('Second', { Email: UserEmail });
              this.props.navigation.navigate('registration');
            }
            else if (responseJson[ 0 ].status == 'true') {
              //  alert(responseJson[0].status);
              this.props.navigation.navigate('Signin');
            }
  
            else if (responseJson[ 0 ].status == 'disable') {
              alert("Your account disabled please contact Qayad Department");
              //this.props.navigation.navigate('Second');
            }
  
            else if (responseJson[ 0 ].status == 'pending') 
            {
              //  alert(responseJson[0].status);
              this.props.navigation.navigate('Otp');
            }
  
            else if (responseJson[ 0 ].status == 'Noacc')
             {
              alert("Your account don't exists");
              // this.props.navigation.navigate('Second');
            }
          
          }).catch((error) => 
          {
            console.error(error);
            alart(error);
          });
        }
    this.logincheck;
  }



  render() {

    const { text, onPress } = this.props;
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
       
        <StatusBar backgroundColor="#003342" barStyle="light-content" />
        {/* <Text>{this.state.id}</Text>
        <Text>{this.state.status}</Text> */}
        <Image
          style={styles.logo}
          source={(require('../assets/splash.png'))}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create
  (

    {
      container: {
        backgroundColor: '#003342',
        padding: 0,
      },


      logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Screenwidth,
        height: ScreenHeight,
      },
                     

    });