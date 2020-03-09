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
import { bold } from 'ansi-colors';
import { Row } from 'native-base';
import { isTerminatorless } from '@babel/types';

class section4 extends Component {
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
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0",width: '100%', height: 40, flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={() =>
          this.props.navigation.navigate('Section4', {
            auther: item.author,
            title: item.book_title,
            pic: item.image,
          })
        }>

      
        <Text style={{ width: '35%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} > {item.author}}</Text>

        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > 2020</Text>
        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > 2020</Text>


        <View style={{  width: '3%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 10,height: 10, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
      </View>
       
      </TouchableOpacity>
    )
  }

  componentDidMount() {
    const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array
        })
        console.log(responseJson.book_array);
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (
      <View style={styles.container}>
       
       
        <View style={{ backgroundColor: "#fff",width: '100%', height: 40, flexDirection: 'row', marginBottom: 3 }}
      >

      
        <Text style={{ width: '35%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12, paddingLeft: 5 }} > Unit#</Text>

        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} > Size Sq-Ft</Text>
        <Text style={{ width: '30%', color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} > Price</Text>


     
       
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
export default section4;