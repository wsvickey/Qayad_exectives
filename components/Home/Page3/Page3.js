import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';

class Page3 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
  
      headerRight: () => (
   
          <TouchableOpacity 
          onPress={
            () => navigation.navigate('contact_add')}>
        <Image
          style={{width:25,height:25,marginRight:10}}
          source={require('../../images/edit-icon.png')}
          on
        />
      </TouchableOpacity>
      ),
     
    };
  };
  constructor () {
    super();
    this.state = {
      auth:'',
      dataSource: []
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0",width: '100%', height: 40, flex: 1, flexDirection: 'row', marginBottom: 3,marginLeft:5 }}
        onPress={() =>
          this.props.navigation.navigate('contact_view', {
            auther: item.name,
            title: item.number,
            pic: item.date,
          })
        }>

      
        <Text style={{ width: '45%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} > {item.name}}</Text>

        <Text style={{ width: '27%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.number}</Text>
        <Text style={{ width: '22%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.date}</Text>


        <View style={{  width: '3%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 10,height: 10, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
      </View>
       
      </TouchableOpacity>
    )
  }
 
  async componentDidMount(){
    let deviceId = DeviceInfo.getDeviceId();
    fetch('http://amaapi.qayad.com/api/',{

      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body:JSON.stringify({
         mode:"jzg2YKUcUKCK6Em56h3tew==",
         adid:deviceId,
         auth:"YV46Ist8oaBc1z6cBcy6tg==",
      })

      }).then((response) =>response.json())
      .then((responseJson) =>
      {
        //alert(JSON.stringify(responseJson));
        alert(responseJson[0].status);
    // alert(responseJson);
        // this.setState({
        //   dataSource: responseJson
        // })

     // alert(responseJson);
      //  console.log(responseJson);

      })

      .catch((error) => {
        console.log(error);
        alert(error);
      })
  
    
    // AsyncStorage.getItem('Auth').then(value =>{
    //   this.setState({'auth': value  })
    //   //alert(value);
     
    // }
      //AsyncStorage returns a promise so adding a callback to get the value
    
  
      
  }


  render() {
    return (
      <View style={styles.container}>
 

        <View style={{ backgroundColor: "#fff",width: '100%', height: 40, flexDirection: 'row', marginBottom: 3 }}
      >

      
        <Text style={{ width: '45%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12, paddingLeft: 5 }} > Name</Text>

        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} > Number</Text>
        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} >  Date</Text>


     
       
      </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.book_title}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,

    flex: 1,
    flexDirection:'column'
  },
  title:
  {
    color: '#5c0831',
    padding: 5,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },




});
export default Page3;