
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import DeviceInfo from 'react-native-device-info';
let authid;
const options = {
  title: 'Select Avatar',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class change_password extends Component {
 
  constructor(props) {
    super(props);
      this.state = { image: require('./images/user_male.png') ,
    oldpass:'',
    newpass:'',
    confirmpass:'',
  

    }
    
   }
   async componentDidMount(){
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
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="Old Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'default'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ oldpass: value })}
              value={this.state.name}
            />
          </View>

          <View style={styles.EdittextStyle}>
            <TextInput
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="New Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
             // keyboardType={'default'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ newpass: value })}
              value={this.state.disigna}
            />
          </View>

          <View style={styles.EdittextStyle}>
           <TextInput
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="Confirm New Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'email-address'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ confirmpass: value })}
              value={this.state.email}
            />
          </View>




        </View>

        

        <View style={{ flex: 1, flexDirection: "row",marginTop:35, justifyContent: 'center' ,alignItems:"center",padding:10}}>

        <TouchableOpacity style={styles.button} onPress={() => 
        {  
          
        if(this.state.oldpass.length==0){
          ToastAndroid.show('Please Enter Old Password',ToastAndroid.SHORT);
          return;
      }

      if(this.state.newpass.length==0){
        ToastAndroid.show('Please Enter New  Password',ToastAndroid.SHORT);
        return;
    }
      if(this.state.confirmpass.length==0){
        ToastAndroid.show('Please Enter Conirm New Password',ToastAndroid.SHORT);
        return;
    }

if(this.state.newpass==this.state.confirmpass)
{
  let deviceId = DeviceInfo.getDeviceId();

  fetch('https://amaapi.qayad.com/api/',{
    method:'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
       mode: "T0nIBidJBKoJ8I3yk/kIPA==",
       adid:deviceId,
       auth:authid,
       current_pass:this.state.oldpass,
       new_pass:this.state.confirmpass,
     
  
    })
    }).then((response) => response.json())
     .then((responseJson) => {
    
     

      if(responseJson[0].status=='false'){
       // alert(JSON.stringify(responseJson[0]));
        ToastAndroid.show(responseJson[0].msg, ToastAndroid.SHORT);
       // alert("Invalide Password , Try Again");
        //this.props.navigation.navigate('Second', { Email: UserEmail });
       //this.props.navigation.navigate('registration');
      }else if(responseJson[0].status=='true'){
        ToastAndroid.show("Successfully Password changed ", ToastAndroid.SHORT);
       
    this.props.navigation.navigate('Dashboard');
    
      }
    
    
    }).catch((error) => {
      console.error(error);
    });
   
    
 
}
else{
  ToastAndroid.show('Please Try again , New Password are not same ',ToastAndroid.SHORT);
    
}

  

  }
  }>
          <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#2B691D', '#164E2F', '#003342' ]}
          
          >

            <Text style={styles.buttonText}>
             Save
  </Text>
          </LinearGradient>
         
          </TouchableOpacity >
          <TouchableOpacity style={styles.button1} onPress={() => { 
this.props.navigation.navigate('Dashboard');
}} >
          <LinearGradient     start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#5C0731', '#4B1432', '#392033' ]}
          >
            <Text style={styles.buttonText}>
            Cancel
  </Text>
          </LinearGradient>
          </TouchableOpacity>
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
    color: '#5c0831',
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
    borderBottomColor:'#CFC9CA',
    borderBottomWidth: 1,
    borderBottomEndRadius: 5,
    margin: 10,
    color: 'white',
  },

  button: {
    width: '45%',
    height: 45,
  
    marginTop: 35,
    marginRight:5,
    
     alignSelf:"center"
  },
  button1: {
    width: '45%',
    height: 45,
    marginTop: 35,
    marginLeft:5,
    alignSelf:"center"
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
export default change_password;