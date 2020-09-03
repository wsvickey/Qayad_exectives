
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Sae, Hoshi } from 'react-native-textinput-effects';
import ImagePicker from 'react-native-image-picker';
import { Left } from 'native-base';
const options = {
  title: 'Select Avatar',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
let fullname,profile_img,user_designation,u_email,u_mobile;
class popup_form extends Component {

  constructor (props) {
    super(props);
    this.state = {
      image: require('./images/user_male.png'),
      name: '',
      disigna: '',
      email: '',
      phone: '',

    }

  }
  async componentDidMount() {
  
    AsyncStorage.getItem('fullname').then((value) =>{ this.setState({name: value})});
  //  AsyncStorage.getItem('profile_img').then((value) =>{ this.setState({image: value})});
    AsyncStorage.getItem('user_designation').then((value) =>{this.setState({disigna: value}) });
    AsyncStorage.getItem('u_email').then((value) =>{this.setState({email: value}) });
    AsyncStorage.getItem('u_mobile').then((value) =>{this.setState({phone: value}) });
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          SELL EXECUTIVE PROFILE
          </Text>

        <View style={{ flex: 1, flexDirection: "row", width: 143, height: 100 }}>

          <TouchableHighlight style={{ width: 120, color: 'ff0' }}
          >
            <Image source={this.state.image} style={{ height: 100, width: 130, borderBottomRightRadius: 60, borderTopRightRadius: 60, marginBottom: 20, borderWidth: 2, borderColor: '#CFC9CA' }} />
          </TouchableHighlight>
        </View>

        <View style={{ justifyContent: 'center', width: '100%',marginTop:25 }}>

          <View style={styles.EdittextStyle}>

            <Image source={require('./images/name.png')} style={styles.ImageStyle} />
          
            <View style={{ flex: 1, color: '#5C0731' }}>
              <Text style={styles.input_title}>FULL NAME OF APPLICANT</Text>
              <Text style={styles.input}>{this.state.name}</Text>
            </View>

          </View>

          <View style={styles.EdittextStyle}>

            <Image source={require('./images/designation.png')} style={styles.ImageStyle} />
           
            <View style={{ flex: 1, color: '#5C0731' }}>
              <Text style={styles.input_title}>Designation</Text>
              <Text style={styles.input}>{this.state.disigna}</Text>
            </View>

          </View>

          <View style={styles.EdittextStyle}>

            <Image source={require('./images/email.png')} style={styles.ImageStyle} />
           
            <View style={{ flex: 1, color: '#5C0731' }}>
              <Text style={styles.input_title}>Email</Text>
              <Text style={styles.input}>{this.state.email}</Text>
            </View>

          </View>
          <View style={styles.EdittextStyle}>

            <Image source={require('./images/phone.png')} style={styles.ImageStyle} />
           
            <View style={{ flex: 1, color: '#5C0731' }}>
              <Text style={styles.input_title}>Phone Number</Text>
              <Text style={styles.input}>{this.state.phone}</Text>
            </View>

          </View>


        </View>
        {/* <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('change_password') }}>
          <Text style={{ marginTop: 10, color: '#003342', alignSelf: "center", fontWeight: "bold", fontSize: 14, borderBottomWidth: 1, borderBottomColor: "#CFC9CA", }}>
            CHANGE PASSWORD
          </Text>

        </TouchableOpacity > */}


        {/* <Text style={styles.input}>{profile_img}</Text> */}



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

  
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    right: 5,
  },










  buttonStyle1: {
    width: '80%',
    height: 45,
    padding: 10,
    marginTop: 35,
    backgroundColor: '#003342',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36

  },

  buttonText: {
    fontSize: 14,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


  input_title:
  {
    fontSize: 10,
    color: '#313131',
  },

  input: {
    fontSize: 14, color: '#003342',
    borderBottomEndRadius: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    paddingBottom: 15,
    fontWeight: "bold",
  }
});

export default popup_form;