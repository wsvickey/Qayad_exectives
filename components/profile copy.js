
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  CheckBox,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Sae ,Hoshi} from 'react-native-textinput-effects';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class popup_form extends Component {
 
  constructor(props) {
    super(props);
      this.state = { image: require('./images/user_male.png') ,
    name:'',
    disigna:'',
    email:'',
    phone:'',

    }
    
   }
  myfun=()=>
  {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
     
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
     
        this.setState({
          image: source,
        });
      }
    });
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          AGENT PROFILE
          </Text>

        <View style={{ flex: 1, flexDirection: "row", width: 143, height: 100 }}>
         
          <TouchableHighlight style={{ width: 120, color: 'ff0' }}
           >
            <Image source={this.state.image} style={{ height: 100, width: 130, borderBottomRightRadius: 60, borderTopRightRadius: 60, marginBottom: 20, borderWidth: 2, borderColor: '#CFC9CA' }} />
          </TouchableHighlight>

          <TouchableHighlight style={{ height: 30, width: 30, position: 'absolute', right: 0, alignSelf: 'center' }}
           onPress={() => this.myfun()}>
            <Image source={require('./images/pedit.png')} style={{ height: 30, width: 30, marginBottom: 20, borderWidth: 2, borderRadius: 50, borderColor: '#CFC9CA' }} />
          </TouchableHighlight>

        </View>

        <View style={{ justifyContent: 'center', width: '100%' }}>

          <View style={styles.EdittextStyle}>

            <Image source={require('./images/name.png')} style={styles.ImageStyle} />

            <Hoshi
              style={{ flex: 1, color: '#5C0731' }}
           label={'FULL NAME OF APPLICANT'}
           inputStyle={{ color: '#5C0731',fontSize:14 }}
           labelStyle={{ color: '#a38e8b',fontSize:10 }}
           height={25}
          // this is used as active border color
          borderColor={'#fff'}
          value={"Waqas Ahmad"}
          labelPadding={0}
          borderPadding={0}
          borderHeight={2}
         
          
        />
          </View>

          <View style={styles.EdittextStyle}>
            <Image source={require('./images/designation.png')} style={styles.ImageStyle} />
            <Text
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="Designation"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
             // keyboardType={'default'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ disigna: value })}
              value={this.state.disigna}

            />
          </View>
          <View style={styles.EdittextStyle}>
            <Image source={require('./images/email.png')} style={styles.ImageStyle} />
            <Text
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="Email"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'email-address'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ email: value })}
              value={this.state.email}

            />
          </View>

          <View style={styles.EdittextStyle}>
            <Image source={require('./images/phone.png')} style={styles.ImageStyle} />
            <Text
              style={{ flex: 1, color: '#5C0731' }}
              placeholder="Phone Number"
              underlineColorAndroid="transparent"
              placeholderTextColor="gray"
              keyboardType={'numeric'}
              autoCapitalize="none"
              onChangeText={(value) => this.setState({ phone: value })}
              value={this.state.phone}

            />
          </View>



        </View>
<TouchableOpacity 
onPress={() => {  this.props.navigation.navigate('change_password')}}>
<Text style={{ marginTop:10, color: '#5c0831',alignSelf: "center", fontWeight: "bold",fontSize: 14,borderBottomWidth:1,borderBottomColor: "#CFC9CA",}}>
          CHANGE PASSWORD
          </Text>

</TouchableOpacity >
        

        <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>


          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#2B691D', '#164E2F', '#003342' ]}
            style={styles.buttonStyle}
            onPress={() => {
              this.props.navigation.navigate('Sec5_nominee');
            }}>
            <Text style={styles.buttonText}>
             Save
  </Text>
          </LinearGradient>
         
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ '#5C0731', '#4B1432', '#392033' ]}
            style={styles.buttonStyle1}>
            <Text style={styles.buttonText}>
            Cancel
  </Text>
          </LinearGradient>
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
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  buttonStyle: {
    width: '45%',
    height: 45,
    padding: 10,
    marginTop: 35,
    marginRight: 10,
    backgroundColor: '#5c0831',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36
  },

  buttonStyle1: {
    width: '45%',
    height: 45,
    padding: 10,
    marginTop: 35,
    backgroundColor: '#5c0831',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 36

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
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',

  },
});
export default popup_form;