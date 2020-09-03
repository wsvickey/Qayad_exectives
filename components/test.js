//This is an example code to get Geolocation//  
import React from 'react';
//import react in our code. 
import {View, Text,  StyleSheet, Image ,ScrollView,TouchableOpacity,ToastAndroid,Alert} from 'react-native';
//import all the components we are going to use.


let todos = [];
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });
import Mybutton from '../pages/components/Mybutton';
import Mytext from '../pages/components/Mytext';
import moment from 'moment';

export default class text extends React.Component {
  constructor(props) {
    super(props);

      this.state = {     
    lati:'',
    longi:'',
  
    }

     db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='agent_location'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS agent_location', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS agent_location(loc_id INTEGER PRIMARY KEY AUTOINCREMENT, latitude VARCHAR(20), longitude INT(20), date VARCHAR(35))',
              []
            );
          }
        }
      );
    });
  }
   
    register_user = () => {
      var that = this;
      const { lati } = this.state;
      const { longi } = this.state;
      
      const {date }= moment(new Date()).format("YYYY-MM-DD h:mm a");
      //alert(user_name, user_contact, user_address);
            db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO agent_location (latitude, longitude, date) VALUES (?,?,?)',
                [lati, longi, date],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            });
         
    };

   
 componentDidMount() {
  const today = this.state.currentDate;
  const date = moment(today).format("YYYY-MM-DD h:mm a");



  // you can also just start without checking for status
  // BackgroundGeolocation.start();
}
componentWillUnmount() {
  // unregister all event listeners
 
}

 render() {
    return (
       <View style = {styles.container}>
        
        <Mytext text="SQLite Example" />
        <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
     
          <Text style = {styles.boldText}>
             You are Here
          </Text>
         
         <ScrollView>
 
 {
   todos.map((item, key) => (

     <TouchableOpacity key={key}>

       <Text style={styles.TextStyle} > latitude = {item.latitude} </Text>

       <Text style={styles.TextStyle} > longitude = {item.longitude} </Text>
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
    marginTop: 10,
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