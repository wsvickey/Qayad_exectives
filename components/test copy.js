//This is an example code to get Geolocation//  
import React from 'react';
//import react in our code. 
import {View, Text,  StyleSheet, Image ,ScrollView,TouchableOpacity,ToastAndroid,Alert} from 'react-native';
//import all the components we are going to use.


import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
let todos = [];
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

import moment from 'moment';

export default class text extends React.Component {
  constructor(props) {
    super(props);

      this.state = {     
    lati:'',
    longi:'',
    currentDate: new Date(),
    }

     db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });

   

   }
 componentDidMount() {
  const today = this.state.currentDate;
  const date = moment(today).format("YYYY-MM-DD h:mm a");


  BackgroundGeolocation.configure({
    
    desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
    stationaryRadius: 50,
    distanceFilter: 50,
    notificationTitle: 'Qayad Estate Managment',
    notificationText: 'enabled',
    debug: false,
    startOnBoot: false,
    stopOnTerminate: true,
    locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
    interval: 300000,
    fastestInterval: 300000,
    activitiesInterval: 300000,
    stopOnStillActivity: false,
   
   
  });

  BackgroundGeolocation.on('location', (location) => {
    // handle your locations here
    // to perform long running operation on iOS
    // you need to create background task
    
   
   
    todos.push(
      {
      latitude: location.latitude,
      longitude: location.longitude,
      date:date
  });

    this.setState({
      lati: location.latitude,
      longi: location.longitude,
      date:date
    });

   
     

    BackgroundGeolocation.startTask(taskKey => {
      // execute long running task
      // eg. ajax post location
      // IMPORTANT: task has to be ended by endTask
      BackgroundGeolocation.endTask(taskKey);
    });
  });

  BackgroundGeolocation.on('stationary', (stationaryLocation) => {
    // handle stationary locations here
   Actions.sendLocation(stationaryLocation);
  });

  BackgroundGeolocation.on('error', (error) => {
    console.log('[ERROR] BackgroundGeolocation error:', error);
  });

  BackgroundGeolocation.on('start', () => {
    console.log('[INFO] BackgroundGeolocation service has been started');
  });

  BackgroundGeolocation.on('stop', () => {
    console.log('[INFO] BackgroundGeolocation service has been stopped');
  });

  BackgroundGeolocation.on('authorization', (status) => {
    console.log('[INFO] BackgroundGeolocation authorization status: ' + status);
    if (status !== BackgroundGeolocation.AUTHORIZED) {
      // we need to set delay or otherwise alert may not be shown
      setTimeout(() =>
        Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
          { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
          { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
        ]), 1000);
    }
  });

  BackgroundGeolocation.on('background', () => {
    console.log('[INFO] App is in background');
    console.log(this.state.longi);
    console.log(this.state.lati);
  });

  BackgroundGeolocation.on('foreground', () => {
    console.log('[INFO] App is in foreground');
    console.log(this.state.longi);
    console.log(this.state.lati);
  });

  BackgroundGeolocation.on('abort_requested', () => {
    console.log('[INFO] Server responded with 285 Updates Not Required');

    // Here we can decide whether we want stop the updates or not.
    // If you've configured the server to return 285, then it means the server does not require further update.
    // So the normal thing to do here would be to `BackgroundGeolocation.stop()`.
    // But you might be counting on it to receive location updates in the UI, so you could just reconfigure and set `url` to null.
  });

  BackgroundGeolocation.on('http_authorization', () => {
    console.log('[INFO] App needs to authorize the http requests');
  });

  BackgroundGeolocation.checkStatus(status => {
    console.log('[INFO] BackgroundGeolocation service is running', status.isRunning);
    console.log('[INFO] BackgroundGeolocation services enabled', status.locationServicesEnabled);
    console.log('[INFO] BackgroundGeolocation auth status: ' + status.authorization);

    // you don't need to check status before start (this is just the example)
    if (!status.isRunning) {
      BackgroundGeolocation.start(); //triggers start on start event
    }
  });

  // you can also just start without checking for status
  // BackgroundGeolocation.start();
}
componentWillUnmount() {
  // unregister all event listeners
  BackgroundGeolocation.removeAllListeners();
}

 render() {
    return (
       <View style = {styles.container}>
         
          <Text style = {styles.boldText}>
             You are Here
          </Text>
         
         <ScrollView>
 
 {
   todos.map((item, key) => (

     <TouchableOpacity key={key}>

       <Text style={styles.TextStyle} > Name = {item.latitude} </Text>

       <Text style={styles.TextStyle} > Age = {item.longitude} </Text>
       <Text style={styles.TextStyle} > Date = {item.date} </Text>
      

       <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />

     </TouchableOpacity>

   ))
 }

</ScrollView>
       </View>
    )
 }
}
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 30,
    color: 'red',
 },
 TextStyle:{
  fontSize : 25,
   textAlign: 'center'
}
})