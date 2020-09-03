
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 **/

import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  BackHandler, Alert, ActivityIndicator, TouchableOpacity
} 
from 'react-native';

import Loader from 'react-loader-spinner'
import page from '../Page4/Page4'
import NetInfo from "@react-native-community/netinfo";
import DeviceInfo from 'react-native-device-info';
import { FloatingAction } from "react-native-floating-action";
let profile_img;


const actions = [
  {
    text: "Add New Application",
    icon: require("../../images/tnapp_icon.png"),
    name: "bt_app",
    position: 2,
    color: "#002632"
  },
  {
    text: "Add New Contact",
    icon: require("../../images/dashadd_icon.png"),
    name: "bt_contact",
    position: 2,
    color: "#002632"
  },

];
class Page1 extends Component {
  constructor () {
    super();
    this.state = {
      auth: '',
      isLoading: true,
      dataSource: [],
      nofnleads: "",
      noffolupleads: "",
      nofpendleads: "",
      nofintrstdleads: "",
      nofntintrstdleads: "",
      nofconvrtdleads: "",
      nofcontacts: "",
     

    };
  }


  backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };


  async componentDidMount() {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
    });
    unsubscribe();
    let deviceId = DeviceInfo.getDeviceId();
    const authvalue = await AsyncStorage.getItem('Auth');
    // alert(authvalue);
    if (authvalue !== null) {
      fetch('https://amaapi.qayad.com/api/', {

        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        
        body: JSON.stringify({
          mode: "6oRukttvQS7LLtpCtPX2kg==",
          adid: deviceId,
          auth: authvalue,
        })

      }).then((response) => response.json())
        .then((responseJson) => {
          // alert(JSON.stringify(responseJson[0]));

          if (responseJson[ 0 ].status == "true") {
            this.setState({
              dataSource: responseJson,
              nofnleads: responseJson[ 1 ].nofnleads,
              noffolupleads: responseJson[ 2 ].noffolupleads,
              nofpendleads: responseJson[ 3 ].nofpendleads,
              nofintrstdleads: responseJson[ 4 ].nofintrstdleads,
              nofntintrstdleads: responseJson[ 5 ].nofntintrstdleads,
              nofconvrtdleads: responseJson[ 6 ].nofconvrtdleads,
              nofcontacts: responseJson[ 7 ].nofcontacts,

            })
          } else {

          }



        })

        .catch((error) => {
          console.log(error);
          alert(error);
        })
        .finally(() => {
          this.setState({
            isLoading: false
          })
        });
    }



  }

  render() {
    return (

      <View style={styles.container}>
   {/* <Text  > {JSON.stringify(this.state.dataSource)} </Text> */}

        <Text style={{ width: '100%', color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 18, paddingLeft: 5, textAlign: "center" }} > Dashboard</Text>

        <View style={{ backgroundColor: "#fff", width: '100%', flexDirection: 'column', marginBottom: 3 }}
        >

          <View style={{ width: '100%', height: 65, backgroundColor: "#fff", flexDirection: "row" }}>

            <View style={{ width: '40%', height: '100%', backgroundColor: "#002632", flexDirection: "row" }}>

              <Image style={{ width: '20%', height: 35, alignSelf: "center", justifyContent: "center", marginLeft: 5 }} source={require('../../images/newleads_white.png')} />
              <Text style={{ width: '80%', color: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 10, paddingLeft: 5 }} > NEW LEADS</Text>

            </View>

            <View style={{ width: '30%', height: '100%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>

              <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.nofnleads}</Text>

            </View>


          </View>
          <View style={{ width: '100%', height: 65, backgroundColor: "#fff", flexDirection: "row", marginTop: 5 }}>

            <View style={{ width: '50%', height: '100%', backgroundColor: "#002632", flexDirection: "row" }}>

              <Image style={{ width: '20%', height: 35, alignSelf: "center", justifyContent: "center", marginLeft: 5 }} source={require('../../images/followup_white.png')} />
              <Text style={{ width: '80%', color: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 10, paddingLeft: 5 }} > FOLLOW-UP LEADS</Text>

            </View>

            <View style={{ width: '30%', height: '100%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>

              <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.noffolupleads}</Text>

            </View>

          </View>
          <View style={{ width: '100%', height: 65, backgroundColor: "#fff", flexDirection: "row", marginTop: 5 }}>

            <View style={{ width: '60%', height: '100%', backgroundColor: "#002632", flexDirection: "row" }}>

              <Image style={{ width: '20%', height: 35, alignSelf: "center", justifyContent: "center", marginLeft: 5 }} source={require('../../images/pending_white.png')} />
              <Text style={{ width: '80%', color: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 10, paddingLeft: 5 }} > PENDING ASSIGN LEADS</Text>

            </View>

            <View style={{ width: '30%', height: '100%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>

              <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.nofpendleads}</Text>

            </View>


          </View>

          <View style={{ width: '100%', height: 140, backgroundColor: "#fff", flexDirection: "row", borderWidth: 1, borderColor: "#002632", marginBottom: 2, marginTop: 5, padding: 10 }}>

            <View style={{ width: '33%', height: '100%', backgroundColor: "#fff", marginRight: 2, justifyContent: "center", alignItems: "center" }} >

              <Text style={{ width: '100%', height: '20%', color: '#002632', fontWeight: 'normal', fontSize: 10, justifyContent: "center", textAlign: "center", marginBottom: 5 }} > INTERESTED LEADS</Text>

              <View style={{ width: '90%', height: '50%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>
                <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.nofintrstdleads}</Text>
              </View>


            </View>

            <View style={{ width: '33%', height: '100%', backgroundColor: "#fff", marginRight: 2, justifyContent: "center", alignItems: "center" }} >

              <Text style={{ width: '100%', height: '20%', color: '#002632', fontWeight: 'normal', fontSize: 10, justifyContent: "center", textAlign: "center", marginBottom: 5 }} > CONVERTED LEADS</Text>

              <View style={{ width: '90%', height: '50%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>
                <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.nofconvrtdleads}</Text>
              </View>


            </View>

            <View style={{ width: '33%', height: '100%', backgroundColor: "#fff", marginRight: 2, justifyContent: "center", alignItems: "center" }} >

              <Text style={{ width: '100%', height: '20%', color: '#002632', fontWeight: 'normal', fontSize: 10, justifyContent: "center", textAlign: "center", marginBottom: 5 }} > NON INTERESTED LEADS</Text>

              <View style={{ width: '90%', height: '50%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>
                <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} > {this.state.nofntintrstdleads}</Text>
              </View>


            </View>


          </View>

          <View style={{ width: '100%', height: 80, backgroundColor: "#fff", flexDirection: "row" }}>

            <View style={{ width: '40%', height: '100%', backgroundColor: "#002632", flexDirection: "row" }}>

              <Image style={{ width: 30, height: 30, alignSelf: "center", justifyContent: "center", marginLeft: 5 }} source={require('../../images/dashcontact_icon.png')} />
              <Text style={{ width: 70, color: '#fff', alignSelf: 'center', fontWeight: 'bold', fontSize: 10, paddingLeft: 5 }} >TOTAL NO OF CONTACT</Text>


            </View>

            <View style={{ width: '30%', height: '100%', backgroundColor: "#fff", justifyContent: "center", alignContent: "center", borderWidth: 1, borderColor: "#002632", marginLeft: 2, marginRight: 2, }}>

              <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 22, paddingLeft: 5 }} >{this.state.nofcontacts}</Text>

            </View>

            {/* <TouchableOpacity style={{ width: '30%', height: '100%', backgroundColor: "#fff", marginTop: 15 }}
              onPress={() =>
                this.props.navigation.navigate('contact_add')
              }>

              <Image style={{ width: 45, height: '60%', alignSelf: "center", justifyContent: "center" }} source={require('../../images/dashadd_icon.png')} />
              <Text style={{ color: '#002632', alignSelf: 'center', fontWeight: 'bold', fontSize: 8, paddingLeft: 5 }} > NEW CONTACT</Text>

            </TouchableOpacity> */}

          </View>

        </View>

        {/* <FloatingAction
          actions={actions}
          color={"#002632"}
          onPressItem={name => {
            //  console.log(`selected button: ${name}`);

            if (name == "bt_app") {

              this.props.navigation.navigate('Screen4')
            }

            if (name == "bt_contact") {

              this.props.navigation.navigate('contact_add')
            }
          }}
        /> */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,
    margin: 10,
    flex: 1,
    flexDirection: 'column'
  },
  title:
  {
    color: '#002632',
    padding: 5,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },




});
export default Page1;