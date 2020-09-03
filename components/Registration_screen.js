import * as React from 'react';
import {KeyboardAvoidingView, ScrollView,Text, View, StyleSheet,Image,TextInput,ToastAndroid,TouchableOpacity ,Alert } from 'react-native';

import PropTypes from 'prop-types';
// You can import from local files

import Home_screen from "./Home_screen"
import { white } from 'ansi-colors';
import DeviceInfo from 'react-native-device-info';
import usernameImg from './images/left-arrow.png';
import passwordImg from './images/left-arrow.png';
import AnimateLoadingButton from 'react-native-animate-loading-button';
export default class App extends React.Component {
  static navigationOptions = { header: null };

  state = {
  mobileno: '', 
  
};

  render() 
  
  {
   const { text, onPress} = this.props;
   const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{width:'100%',backgroundColor:'#003342'}}>
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
  

  
        <Image 
         style={styles.logo}
        source={(require('../assets/logo_full_white.png'))}
        />
     
  <Text  style={styles.title}>User Verification</Text>
  <Text  style={{color:'#fff',fontSize:12,marginLeft:25,marginBottom:20,marginRight:25,  justifyContent: 'center',
      textAlign: 'center',}}>Please enter your mobile number that are registered in QAYAD ESTATE MANAGMENT </Text>
  <View style={styles.EdittextStyle}>

        <Image source={require('./images/phoneicon.png')} style={styles.ImageStyle} />

          <TextInput
              style={{flex:1,color:'white'}}
              placeholder="Please enter your mobile no"
              placeholderTextColor = "#d6d1c3"
              underlineColorAndroid="transparent"
              keyboardType={'numeric'}
              autoCapitalize = "none"
             onChangeText={(value) => this.setState({mobileno: value})}
             value={this.state.mobileno}
          />

        </View>

          
        <View style={{ flex: 1, justifyContent: 'center',marginTop:150, }}>
            <AnimateLoadingButton
              ref={c => (this.loadingButton = c)}
              width={300}
              height={45}
              title="Submit"
              titleFontSize={16}
              titleFontFamily="nexa_bold"
              titleColor="#202646"
              backgroundColor="#FFF"
              activityIndicatorColor="#003342"
              borderRadius={4}
              onPress={() => {
                this.loadingButton.showLoading(true);
                if(this.state.mobileno.length==0 ){
                    ToastAndroid.show('Please Enter your mobile number',ToastAndroid.SHORT);
                    return;
                }else  if(this.state.mobileno.length <= 10 ){
                  ToastAndroid.show('Please Enter Correct Mobile Number',ToastAndroid.SHORT);
                  return;
              }

              
                // ToastAndroid.show(this.state.mobile,ToastAndroid.SHORT);
                // //Handle LOGIN
                // this.props.navigation.navigate('Otp');

                let deviceId = DeviceInfo.getDeviceId();
///alert(deviceId);
    fetch('https://amaapi.qayad.com/api/',{
    method:'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
       mode: "ZRjw9kmkOeHcIiDpQEvT+5aFSsSK7fWWku05G77Gavc=",
       andid:deviceId,
       umob:this.state.mobileno,
     
      
    })
    }).then((response) => response.json())
     .then((responseJson) => {
      if(responseJson[0].status=='false'){
       // alert("Mobile Number Not Resigtered ");
        ToastAndroid.show('Mobile Number Not Resigtered',ToastAndroid.SHORT);
              
        //this.props.navigation.navigate('Second', { Email: UserEmail });
       //this.props.navigation.navigate('registration');
      }else if(responseJson[0].status=='true'){
        //alert(responseJson[0].status);
        //this.props.navigation.navigate('Second', { Email: UserEmail });
       this.props.navigation.navigate('Otp');
      }else{
       //alert(JSON.stringify(responseJson));
       ToastAndroid.show(JSON.stringify(responseJson),ToastAndroid.SHORT);
      }


    }).catch((error) => {
      console.error(error);
    });
            }
            
          }
      
     

          />
        </View>
   
 </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    backgroundColor: '#003342',
    alignItems: 'center',
    padding: 8,
  },

    logo: {
      resizeMode:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        marginBottom:80,
        marginTop:20,
        height: 120,
    },
    title:{
      color: 'white',
      marginBottom:15,
      fontWeight: 'bold',
      fontSize:18,
    },
    EdittextStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:300,
      height: 40,
      borderColor:'gray',
      borderWidth: 1,
      height: 40,
      borderRadius: 5 ,
      margin: 10,
      color: 'white',
  },
     buttonStyle: {
       width:300,
      height: 45,
	padding:10,
	backgroundColor: '#fff',
	borderRadius:5,

  justifyContent: 'center', 
  alignItems: 'center',
marginTop:100,
  marginBottom: 36

  },
   textStyle: {
    fontSize:20,
	  color: '#003342',
    textAlign: 'center',
    fontWeight: 'bold',

  },


ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
});
