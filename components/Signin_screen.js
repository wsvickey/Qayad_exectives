import * as React from 'react';
import {KeyboardAvoidingView, Keyboard,Text, View, StyleSheet,Image,StatusBar,AsyncStorage,
  TextInput,ToastAndroid,TouchableOpacity,Alert,ScrollView, } from 'react-native';

  import DeviceInfo from 'react-native-device-info';

export default class login_screen extends React.Component {
  static navigationOptions = { header: null };

  state = {
  username: '', 
  password: ''
};
constructor(props){
  super(props)
 
}


  render() 
  
  {
   const { text, onPress} = this.props;
   const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{width:'100%',backgroundColor:'#5c0931'}}>
     <KeyboardAvoidingView style={styles.container} >
  
     <StatusBar backgroundColor="#5c0831" barStyle="light-content" />

      
        <Image 
         style={styles.logo}
        source={(require('../assets/logo_full_white.png'))}
        />
     
  <Text  style={styles.title}>QAYAD Agent Login</Text>
         
  <View style={styles.EdittextStyle}>

        <Image source={require('./images/phoneicon.png')} style={styles.ImageStyle} />

          <TextInput
              style={{flex:1,color:'white'}}
              placeholder="Enter Mobile Number"
              underlineColorAndroid="transparent"
              placeholderTextColor = "#fff"
              keyboardType={'numeric'} 
              autoCapitalize = "none"
             onChangeText={(value) => this.setState({username: value})}
             value={this.state.username}
             
          />

        </View>

        <View style={styles.EdittextStyle}>

<Image source={require('./images/password.png')} style={styles.ImageStyle} />

  <TextInput
      style={{flex:1,color:'white'}}
      placeholder="Enter Password"
      underlineColorAndroid="transparent"
      placeholderTextColor = "#fff"
            autoCapitalize = "none"
            onChangeText={(value) => this.setState({password: value})}
            value={this.state.password}
  />

</View>

          
            {/* <ForgetPass /> */}
            <Text 
                onPress={() => 
                  // navigate('SecondPage')
                  this.props.navigation.navigate('Forget')
                }
            style={{
              fontSize:14, color: 'white',fontWeight:'bold',alignSelf: 'flex-end',marginRight:'10%',marginTop:2}
              }>
                
                Forget Password</Text>
     <TouchableOpacity style={styles.buttonStyle}
			 onPress={() => 
            {

         if (this.state.username.length == 0) {
           ToastAndroid.show('Please Enter Mobile Number', ToastAndroid.SHORT);
           return;
         } else if (this.state.username.length <= 10) {
           ToastAndroid.show('Please Enter Correct Mobile Number', ToastAndroid.SHORT);
           return;
         } else if (this.state.username.length >= 12) {
           ToastAndroid.show('Please Enter Correct Mobile Number', ToastAndroid.SHORT);
           return;
         }

                if(this.state.password.length==0){
                    ToastAndroid.show('Please Enter Password',ToastAndroid.SHORT);
                    return;
                }
               
              var aid;
                ToastAndroid.show(this.state.username,ToastAndroid.SHORT);
                //Handle LOGIN
               let deviceId = DeviceInfo.getDeviceId();
//                var SharedPreferences = require('react-native-shared-preferences');
//                SharedPreferences.setName("auth");
// //                SharedPreferences.getItem("authid", function(value){
// //                 console.log(value);
// //                 aid=value;
// //               });
// // alert(aid);
                
fetch('http://amaapi.qayad.com/api/',{
                  method:'post',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body:JSON.stringify({
                     mode: "iXEddVXBdmLRtg1zj4bfKQ==",
                     adid:deviceId,
                     umob:this.state.username,
                     pass:this.state.password,
                   
                
                  })
                  }).then((response) => response.json())
                   .then((responseJson) => {
                       // alert(JSON.stringify(responseJson));
                       // alert((responseJson[0].authc));
                      
                    if(responseJson[0].status=='false'){
                      alert("Invalide Login , Try Again");
                      //this.props.navigation.navigate('Second', { Email: UserEmail });
                     //this.props.navigation.navigate('registration');
                    }else if(responseJson[0].status=='true'){
                      //alert(responseJson[0].status);
                      //this.props.navigation.navigate('Second', { Email: UserEmail });
                    //  SharedPreferences.setItem("authid",responseJson[0].authc);

                      AsyncStorage.setItem('Auth', responseJson[0].authc);
                     this.props.navigation.navigate('Dashboard');
                    }
                  
                  
                  }).catch((error) => {
                    console.error(error);
                  });

            }
            
            }
            
		  >
         
			 
       <Text style={styles.textStyle}>Login</Text>
       
		  </TouchableOpacity>
      
   
 </KeyboardAvoidingView>
 </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  
    backgroundColor: '#5c0831',
    alignItems: 'center',
  
  
  },
  // body: {
  //   flex: 1,
  //   width:'100%',
  //  height:'100%',

  //   backgroundColor: '#5cf',
  //   alignItems: 'center',
  
  // },
    logo: {
         resizeMode:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        marginTop:25,
        marginBottom:20,
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
      width:'80%',
    height:'100%',
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
marginTop:150,
  marginBottom: 36

  },
   textStyle: {
    fontSize:20,
	  color: '#202646',
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
