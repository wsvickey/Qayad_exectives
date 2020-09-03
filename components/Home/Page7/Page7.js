
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  ToastAndroid,
  ScrollView,
  Switch
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import AnimateLoadingButton from 'react-native-animate-loading-button';
let authid;
const options = {
  title: 'Select Avatar',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class Page7 extends Component {

  constructor (props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitch2 = this.toggleSwitch2.bind(this);
    this.toggleSwitch3 = this.toggleSwitch3.bind(this);
    this.state = {
      eye1: true,
      eye2: true,
      eye3: true,
      oldpass: '',
      newpass: '',
      confirmpass: '',
  


    }

  }
  toggleSwitch() {
    this.setState({ eye1: !this.state.eye1 });
  }
  toggleSwitch2() {
    this.setState({ eye2: !this.state.eye2 });
  }
  toggleSwitch3() {
    this.setState({ eye3: !this.state.eye3 });
  }
  async componentDidMount() {
    try {
      authid = await AsyncStorage.getItem('Auth');

    } catch (error) {
      // Error retrieving data
    }

  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          CHNAGE YOUR PASSWORD
          </Text>



        <View style={{ justifyContent: 'center', width: '100%' }}>

          <View style={styles.EdittextStyle}>
            <TextInput
              style={{ flex: 1, color: '#003342' }}
              placeholder="Old Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'default'}
              autoCapitalize="none"
              secureTextEntry={this.state.eye1}
              onChangeText={(value) => this.setState({ oldpass: value })}
              
            />
            <Switch
              thumbColor="#fff"
              trackColor={{ true: 'gray', false: 'white' }}
              onValueChange={this.toggleSwitch}
              value={!this.state.eye1}
            />
          </View>

          <View style={styles.EdittextStyle}>
            <TextInput
              style={{ flex: 1, color: '#003342' }}
              placeholder="New Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              // keyboardType={'default'}
              autoCapitalize="none"
              secureTextEntry={this.state.eye2}
              onChangeText={(value) => this.setState({ newpass: value })}
            
            />
            <Switch
              thumbColor="#fff"
              trackColor={{ true: 'gray', false: 'white' }}
              onValueChange={this.toggleSwitch2}
              value={!this.state.eye2}
            />
          </View>
         
          <View style={styles.EdittextStyle}>
            <TextInput
              style={{ flex: 1, color: '#003342' }}
              placeholder="Confirm New Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'default'}
              autoCapitalize="none"
              secureTextEntry={this.state.eye3}
              onChangeText={(value) => this.setState({ confirmpass: value })}
            />
            <Switch
              thumbColor="#fff"
              trackColor={{ true: 'gray', false: 'white' }}
              onValueChange={this.toggleSwitch3}
              value={!this.state.eye3}
            />
          </View>




        </View>

        <View style={{ flex: 1, justifyContent: 'center',marginTop: 35, }}>
        <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={300}
          height={45}
          title="Submit"
          titleFontSize={16}
          titleFontFamily="nexa_bold"
          titleColor="rgb(255,255,255)"
          backgroundColor="#003342"
          borderRadius={4}
          onPress={() => {
            this.loadingButton.showLoading(true);
            if (this.state.oldpass.length == 0) {
              ToastAndroid.show('Please Enter Old Password', ToastAndroid.SHORT);
              this.loadingButton.showLoading(false);
              return;
            }

            if (this.state.newpass.length == 0) {
              ToastAndroid.show('Please Enter New  Password', ToastAndroid.SHORT);
              this.loadingButton.showLoading(false);
              return;
            }
            if (this.state.confirmpass.length == 0) {
              ToastAndroid.show('Please Enter Conirm New Password', ToastAndroid.SHORT);
              this.loadingButton.showLoading(false);
              return;
            }

            if (this.state.newpass == this.state.confirmpass) {
              let deviceId = DeviceInfo.getDeviceId();

              fetch('https://amaapi.qayad.com/api/', {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  mode: "T0nIBidJBKoJ8I3yk/kIPA==",
                  adid: deviceId,
                  auth: authid,
                  current_pass: this.state.oldpass,
                  new_pass: this.state.confirmpass,


                })
              }).then((response) => response.json())
                .then((responseJson) => {

                  this.loadingButton.showLoading(false);

                  if (responseJson[ 0 ].status == 'false') {
                    // alert(JSON.stringify(responseJson[0]));
                    ToastAndroid.show(responseJson[ 0 ].msg, ToastAndroid.SHORT);
                    // alert("Invalide Password , Try Again");
                    //this.props.navigation.navigate('Second', { Email: UserEmail });
                    //this.props.navigation.navigate('registration');
                  } else if (responseJson[ 0 ].status == 'true') {
                    ToastAndroid.show("Successfully Password changed ", ToastAndroid.SHORT);
                    this.loadingButton.showLoading(false);
                    this.props.navigation.navigate('Dashboard');

                  }


                }).catch((error) => {
                  console.error(error);
                  this.loadingButton.showLoading(false);
                });



            }
            else {
              ToastAndroid.show('Please Try again , New Password are not same ', ToastAndroid.SHORT);

            }

            }
            
          }

          />
        </View>

     




      </ScrollView>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    color: '#003342',
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },


  EdittextStyle: {
    flexDirection: 'row',

    alignSelf: 'center',
    width: '85%',
    height: 40,
    borderColor: 'gray',

    height: 40,
    borderBottomColor: '#CFC9CA',
    borderBottomWidth: 1,
    borderBottomEndRadius: 5,
    margin: 10,
    color: 'white',
  },

  button: {
    width: '45%',
    height: 45,

    marginTop: 35,
    marginRight: 5,

    alignSelf: "center"
  },
  button1: {
    width: '45%',
    height: 45,
    marginTop: 35,
    marginLeft: 5,
    alignSelf: "center"
  },


  buttonText: {
    fontSize: 22,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

});
export default Page7;