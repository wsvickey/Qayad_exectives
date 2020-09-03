import * as React from 'react';
import {KeyboardAvoidingView, Keyboard,Text, View, StyleSheet,Image,StatusBar,AsyncStorage,
  TextInput,ToastAndroid,TouchableHighlight,Alert,ScrollView,Switch } from 'react-native';

  import DeviceInfo from 'react-native-device-info';
  import AnimateLoadingButton from 'react-native-animate-loading-button';
export default class login_screen extends React.Component {
  static navigationOptions = { header: null };


constructor(props){
  super(props)
  this.toggleSwitch = this.toggleSwitch.bind(this);
 this.state={
  username: '', 
  password: '',
  eye: true
 }
}

toggleSwitch() {
  this.setState({ eye: !this.state.eye});
}
  render() 
  
  {
   const { text, onPress} = this.props;
   const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{width:'100%',backgroundColor:'#003342'}}>
     <KeyboardAvoidingView style={styles.container} >
  
     <StatusBar backgroundColor="#003342" barStyle="light-content" />

      
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
      secureTextEntry={this.state.eye} 
            autoCapitalize = "none"
            onChangeText={(value) => this.setState({password: value})}
            value={this.state.password}
  />
 <Switch 
 thumbColor="#fff"
  trackColor={{true: 'gray', false: 'white'}}
          onValueChange={this.toggleSwitch}
          value={!this.state.eye}
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
                <View style={{ flex: 1, justifyContent: 'center',marginTop:150, }}>
            <AnimateLoadingButton
              ref={c => (this.loadingButton = c)}
              width={300}
              height={45}
              title="Login"
              titleFontSize={18}
              titleFontFamily="nexa_bold"
              titleColor="#202646"
              backgroundColor="#FFF"
              activityIndicatorColor="#003342"
              borderRadius={4}
              onPress={() => {
                this.loadingButton.showLoading(true);

         if (this.state.username.length == 0) {
          this.loadingButton.showLoading(false);
           ToastAndroid.show('Please Enter Mobile Number', ToastAndroid.SHORT);
           return;
         } else if (this.state.username.length <= 10) {
          this.loadingButton.showLoading(false);
           ToastAndroid.show('Please Enter Correct Mobile Number', ToastAndroid.SHORT);
           return;
         } else if (this.state.username.length >= 12) {
          this.loadingButton.showLoading(false);
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

fetch('https://amaapi.qayad.com/api/',{
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
                       this.loadingButton.showLoading(false);
                    if(responseJson[0].status=='false'){
                      //alert("Invalide Login , Try Again");
                      ToastAndroid.show('Invalide Login , Try Again', ToastAndroid.SHORT);
                      //this.props.navigation.navigate('Second', { Email: UserEmail });
                     //this.props.navigation.navigate('registration');
                    }else if(responseJson[0].status=='true'){
                     // alert(JSON.stringify(responseJson));
                      
                
                      AsyncStorage.setItem('Auth', responseJson[0].authc);
                      AsyncStorage.setItem('login', 'true');
                   
                      AsyncStorage.setItem('fullname', responseJson[0].fullname);
                      AsyncStorage.setItem('profile_img', responseJson[0].profile_img);
                      AsyncStorage.setItem('user_designation', responseJson[0].user_designation);
                  AsyncStorage.setItem('u_email', responseJson[0].u_email);
                  AsyncStorage.setItem('u_mobile', responseJson[0].u_mobile);
                    this.props.navigation.navigate('Dashboard');
                    }
                  
                  
                  }).catch((error) => {
                    console.error(error);
                    this.loadingButton.showLoading(false);
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
    width:'100%',
  
    backgroundColor: '#003342',
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
