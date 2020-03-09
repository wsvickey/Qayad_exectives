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
import * as global from '../../utils/global';
import DeviceInfo from 'react-native-device-info';
class Page2 extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
  
      // headerRight: () => (
   
      //     <TouchableOpacity 
      //     onPress={
      //       () => navigation.navigate('Contact_add')}>
      //   <Image
      //     style={{width:25,height:25,marginRight:10}}
      //     source={require('../../images/edit-icon.png')}
      //     on
      //   />
      // </TouchableOpacity>
      // ),
     
    };
  };
 
  
  constructor () {
    super();
    
    this.state = {
   
      dataSource: []
    };
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0",width: '100%', height: 40, flex: 1, flexDirection: 'row', marginBottom: 3,marginLeft:5 }}
        onPress={() =>
          this.props.navigation.navigate('app_view', {
            auther: item.author,
            title: item.book_title,
            pic: item.image,
          })
        }>

{/* {item.author} */}
       
        <Text style={{ width: '31%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 10, paddingLeft: 5 }} > 321-123654-212</Text>

        <Text style={{ width: '24%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 10 }} > 1244-1133</Text>
        <Text style={{ width: '20%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 10 }} > Available</Text>
        <Text style={{ width: '20%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 10 }} > 12/11/2019</Text>


        <View style={{  width: '3%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 10,height: 10, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
      </View>
       
      </TouchableOpacity>
    )
  }

  async componentDidMount() {
    
    let deviceId = DeviceInfo.getDeviceId();


    const url = 'http://amaapi.qayad.com/api/';

    fetch(url,{

      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },

      body:JSON.stringify({
         mode: "gq9kkaqjpEcOL67erKLjuA==",
         adid:deviceId,
         auth:"YV46Ist8oaBc1z6cBcy6tg==",
      })

      }).then((response) => response.json())
        .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array
        })

        console.log(responseJson.book_array);
      })

      .catch((error) => {
        console.log(error);
      })

    
                                                                                                           
  
  //alert(global.a1);


    // if(aa=="" && aa==null)
    // {
    //   alert(aa);
    // }else{
    //   alert(aa);
    // }

  
    // fetch('http://amaapi.qayad.com/api/',{
    //   method:'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body:JSON.stringify({
    //      mode: "gq9kkaqjpEcOL67erKLjuA==",
    //      adid:"BalongV8R1SFT",
    //      auth:"YV46Ist8oaBc1z6cBcy6tg==",
        
    //   })
    //   }).then((response) => response.json())
    //     .then((responseJson) => {
    //    // alert(responseJson);
    //      alert(JSON.stringify(responseJson));
    //       // this.setState({
    //       //   dataSource: responseJson
    //       // })
    //       // console.log(responseJson);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })

  }

  componentDidUpdate() {
    // I'd like my variable to be accessible here
 
  
   
}
  render() {
    return (
      <View style={styles.container}>
       
       
        <View style={{ backgroundColor: "#fff",width: '100%', height: 40, flexDirection: 'row', marginBottom: 3 }}
      >

      
        <Text style={{ width: '35%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12, paddingLeft: 5 }} > Registration#</Text>

        <Text style={{ width: '25%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} > Unit#</Text>
        <Text style={{ width: '20%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} >  Status</Text>
        <Text style={{ width: '20%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} >  Date</Text>

     
       
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
export default Page2;