import * as React from 'react';
import {KeyboardAvoidingView,ImageBackground ,ScrollView, Keyboard,Text, View, StyleSheet,Image,TextInput,ToastAndroid,TouchableOpacity ,Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import OTPInputView from '@twotalltotems/react-native-otp-input'
export default class Otp_screen extends React.Component {
  static navigationOptions = { header: null };

  state = {
  otpcode: '', 
  
};

  render() 
  
  {
   const { text, onPress} = this.props;
   const {navigate} = this.props.navigation;
    return (
      
     <ImageBackground source={require('../assets/back_light.png')} style={styles.body} behavior="padding" enabled>
 
<ScrollView style={{width:'100%',height:'100%'}}>
  <View style={styles.container}>
        <Image 
         style={styles.logo}
        source={(require('../assets/logo_full_maroon.png'))}
        />
     
  <Text  style={{color:'#003342',fontSize:16}}>Enter One Time Password (OTP) </Text>
  <Text  style={{color:'#003342',marginBottom:20,fontSize:16}}>provided to you by QAYAD managment </Text>
  <View style={styles.EdittextStyle}>

  <OTPInputView
    style={{width: '80%', height: 200,color: '#003342'}}
    pinCount={6}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
      this.setState({otpcode: code})
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
        </View>

     

          
     <TouchableOpacity style={styles.buttonStyle}
			 onPress={() => 
            {
                if(this.state.otpcode.length==0){
                    ToastAndroid.show('Please Enter your Complete Otp code',ToastAndroid.SHORT);
                    return;
                }else{
                 
                  ToastAndroid.show( this.state.otpcode,ToastAndroid.SHORT);
                  //Handle LOGIN
               

                  let deviceId = DeviceInfo.getDeviceId();
                  fetch('https://amaapi.qayad.com/api/',{
                    method:'post',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body:JSON.stringify({
                       mode: "NGePK0r9F9EWMHmQK7/veQ==",
                       andid:deviceId,
                       otp:this.state.otpcode,
                     
                      
                    })
                    }).then((response) => response.json())
                     .then((responseJson) => {
                      if(responseJson[0].status=='false'){
                        alert(" Invalide Otp Code,Try Again ");
                        //this.props.navigation.navigate('Second', { Email: UserEmail });
                       //this.props.navigation.navigate('registration');
                      }else if(responseJson[0].status=='true'){
                        //alert(responseJson[0].status);
                        //this.props.navigation.navigate('Second', { Email: UserEmail });
                       this.props.navigation.navigate('Signin');
                      }
                
                
                    }).catch((error) => {
                      console.error(error);
                    });




                }

          
             
            }
            
            }
            
		  >
         
			 
       <Text style={styles.textStyle}>Verify</Text>
		  </TouchableOpacity>
      </View>
      </ScrollView>
 </ImageBackground >

    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    height:'auto',
    paddingTop:10,
    backgroundColor: '#003342',

    alignItems: 'center',
   
  },
  container: {
    flex: 1,
    height:'auto',
    paddingTop:20,
  
    alignItems: 'center',
    padding: 8,
  },
    logo: {
        resizeMode:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        marginBottom:60,
        height: 120,
    },
    title:{
      color: 'white',
      marginBottom:35,
      fontWeight: 'bold',
      fontSize:18,           
    },
    
    EdittextStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:'80%',
      height: 40,
    
      height: 40,
      borderRadius: 5 ,
      margin: 10,
      color: '#003342',
  },
     buttonStyle: {
       width:300,
      height: 45,
	padding:10,
	backgroundColor: '#003342',
  borderRadius:5,
  justifyContent: 'center', 
  alignItems: 'center',
  marginTop:100,
  marginBottom: 36

  },
    textStyle: {
    fontSize:20,
	  color: '#fff',
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

borderStyleBase: {
  width: 30,
  height: 45
},

borderStyleHighLighted: {

  borderColor: "#003342",
  color:"#003342",
},

underlineStyleBase: {
  width: 30,
  height: 45,
  borderWidth: 0,
  borderBottomWidth: 1,
  borderBottomColor:"#003342"
},

underlineStyleHighLighted: {
  borderColor: "#03DAC6",
},
});
