
import React, { Component } from 'react';
import {
  Text,
  YellowBox,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import AnimateLoadingButton from 'react-native-animate-loading-button';
import { Hoshi } from 'react-native-textinput-effects';
import global from '../../utils/global';
import DeviceInfo from 'react-native-device-info';
let cnicid,thenum;

class contact_add extends Component {

  static navigationOptions = {
    padding: 10,
    headerTitle: '',

    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackground: (
      <Image
        style={{ width: '100%', height: '100%', flex: 3 }}
        source={require('../../images/toolbar_main.png')}
      />
    ),
  };

  constructor (props) {
    super(props);
    this.state = {
      fullname: "",
      contact: "",
      cnic: "",
      note: "",
      auth: ""
    };

  }

  async componentDidMount() {
    AsyncStorage.getItem('Auth').then((value) => this.setState({ 'auth': value }))
    //   YellowBox.ignoreWarnings(['componentWillReceiveProps']);
    //   const _console = _.clone(console);
    //   console.warn = message => {
    //   if (message.indexOf('componentWillReceiveProps') <= -1) {
    //    _console.warn(message);
    //   } 
    //  };
  }
  

  handleChange_kin(value) {
    // var property_id = this.state.propertytype.filter(function(item) {
    //   return item.pro_type_id == value

    // })

    if (value.length == 5) {
      this.setState({
        cnic: value + "-",

      })
    }
    if (value.length == 13) {
      this.setState({
        cnic: value + "-",

      })
    }
    if (value.length == 15) {

      cnicid = value;
    }
    if (value.length >= 15) {
      this.setState({
        cnic: cnicid,

      })
    }

  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Add New Contact
        </Text>



        <View style={{ marginBottom: 10 }}>
          <Hoshi
            style={{ width: '100%' }}
            label={'Full Name'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

            onChangeText={(text) => { this.setState({ fullname: text }) }}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Hoshi
            style={{ width: '100%' }}
            label={'Contact Number'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            keyboardType={'numeric'}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

            onChangeText={(text) => { this.setState({ contact: text }) }}
          />
        </View>


        <View style={{ marginBottom: 10 }}>

          <Hoshi
            style={{ width: '100%' }}
            label={'CNIC #'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            keyboardType={'numeric'}

            labelPadding={0}
            borderPadding={0}
            borderHeight={2}
            value={this.state.cnic}
            keyboardType={'numeric'}
            onChangeText={(text) => {
              this.handleChange_kin(text)
            }}
          />
          <Text style={{ fontSize: 10, color: 'red' }}>Note: Write CNIC Number without Space( )</Text>

        </View>
        <View style={{ marginBottom: 10 }}>
          <Hoshi
            style={{ width: '100%' }}
            label={'Note'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

            onChangeText={(text) => { this.setState({ note: text }) }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <AnimateLoadingButton
            ref={c => (this.loadingButton = c)}
            width={300}
            height={45}
            title="Submit"
            titleFontSize={16}
            titleFontFamily="nexa_bold"
            titleColor="rgb(255,255,255)"
            backgroundColor="#5c0831"
            borderRadius={4}
            onPress={() => {
              this.loadingButton.showLoading(true);

              if (this.state.fullname.length == 0) {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Enter Full Name', ToastAndroid.SHORT);
                return;
              }
              if (this.state.contact.length == 0) {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Enter Contact Number', ToastAndroid.SHORT);
                return;
              }

              if (this.state.contact.length > 8 || this.state.contact.length < 14) {
                // ToastAndroid.show('true',ToastAndroid.SHORT);
              }
              else {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Enter Correct Contact Number ', ToastAndroid.SHORT);
                return;
              }

             
         
               if (!this.state.cnic.length=='' ) {
             
                thenum = this.state.cnic.match(/\d/g);
                thenum = thenum.join("");
                 if (thenum.length > 13 || thenum.length < 13) {
                   ToastAndroid.show('Please Enter Correct CNIC Number ', ToastAndroid.SHORT);
                   this.loadingButton.showLoading(false);
                   return;
                  }
                 else {
                  // this.loadingButton.showLoading(false);
                  // alert(thenum);
                   
                 }
              }
               


              // if (this.state.note.length == 0) {
              //   this.loadingButton.showLoading(false);
              //   ToastAndroid.show('Please Enter Note', ToastAndroid.SHORT);
              //   return;
              // }
              let deviceId = DeviceInfo.getDeviceId();

              //  alert(this.state.fullname);
              // this.props.navigation.navigate('Sec5_nominee');  

              fetch('https://amaapi.qayad.com/api/', {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  mode: "RymQitmRovPLZF6VILZegQ==",
                  adid: deviceId,
                  auth: this.state.auth,
                  name: this.state.fullname,
                  number: this.state.contact,
                  cnic: thenum,
                  note: this.state.note,

                })
              }).then((response) => response.json())
                .then((responseJson) => {
                  // alert(JSON.stringify(responseJson));
                  // alert(responseJson[0].status);

                  if (responseJson[ 0 ].status == 'false') {

                    ToastAndroid.show('Invalide Login , Try Again', ToastAndroid.SHORT);
                    this.loadingButton.showLoading(false);
                    //this.props.navigation.navigate('Second', { Email: UserEmail });
                    //this.props.navigation.navigate('registration');
                  } else if (responseJson[ 0 ].status == 'true') {

                    ToastAndroid.show('Successfully Inserted ', ToastAndroid.SHORT);
                    //this.props.navigation.navigate('Screen3');
                    goBack();
                    this.loadingButton.showLoading(false);
                  }


                }).catch((error) => {
                  console.error(error);
                });
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
    padding: 20,
    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    color: '#5c0831',
    marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },
  input_title:
  {
    fontSize: 12,
    color: '#5c0831',
    fontWeight: 'bold',
    marginBottom: 5,

  },
  input: {
    color: '#5c0831',
    fontWeight: "normal",
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  }
  ,
  EdittextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
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
    width: '100%',
    height: 45,
    padding: 10,
    marginTop: 35,
    backgroundColor: '#5c0831',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 36

  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',

  },
});
export default contact_add;