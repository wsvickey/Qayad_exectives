import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { bold } from 'ansi-colors';
import { Row } from 'native-base';

class new_application extends Component {
  static navigationOptions = {
    padding: 10,
    headerTitle: '',

    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackground: (
      <Image
        style={{ width:'100%', height: '100%', flex: 3}}
        source={require('../../images/toolbar_main.png') }
      />
    ),
  };
  constructor () {
    super();
    this.state = {
      dataSource: []
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0",width: '100%', height: 50, flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={() =>
          this.props.navigation.navigate('Section3', {
            auther: item.author,
            title: item.book_title,
            pic: item.image,
          })
        }>

        <View style={{  width: '20%', justifyContent: "center", alignContent: 'center',alignItems:'center' }} >

          <Image style={{ width: '60%', height: '40%',resizeMode:'center' }} source={ require('../../images/unit-icon.png') } />
      
        </View>

        <View style={{  width: '80%', flex: 1,justifyContent: "center",alignItems:'flex-start'}} >
         
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12  }} > Total No of Units: </Text>
          
        </View>

      
        <View style={{  width: '5%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 15,height: 15, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
      </View>
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    let deviceId = DeviceInfo.getDeviceId();
   
    const url = "https://amaapi.qayad.com/api/";
//alert(deviceId);
    fetch(url,{

      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body:JSON.stringify({
         mode: "TvPMdhejzzj7JKvZpfN0ew==",
         adid:deviceId,
         auth:"YV46Ist8oaBc1z6cBcy6tg==",
      })

      }).then((response) => response.json())
        .then((responseJson) => {
        // this.setState({
        //   dataSource: responseJson.book_array
        // })
      alert(responseJson.response);
      })

      .catch((error) => {
        console.log(error);
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Shop 450 sq ft</Text>

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
export default new_application;