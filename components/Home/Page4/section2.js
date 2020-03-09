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
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0",width: '100%', height: 120, flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={() =>
          this.props.navigation.navigate('Section3', {
            auther: item.author,
            title: item.book_title,
            pic: item.image,
          })
        }>

        <View style={{  width: '20%', justifyContent: "center", alignContent: 'center',alignItems:'center' }} >

          <Image style={{ width: '60%', height: '40%',resizeMode:'center' }} source={ require('../../images/unit-icon.png') } />
          <Text style={{ color: '#5c0831', alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }} > 2020</Text>

        </View>

        <View style={{  width: '45%', flex: 1, flexDirection: 'column' }} >

          <View style={{  width: '100%', height: "25%", flexDirection: 'row', marginTop: 15 }} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 14 }} > Total Area: </Text>
            <Text style={{ color: '#5c0831', fontWeight: 'normal', fontSize: 14 }} > 450 Sq/ft </Text>
          </View>

          <View style={{ width: '100%', height: "15%", flexDirection: 'row' }} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }} > Total No of Units: </Text>
            <Text style={{ color: '#5c0831', fontWeight: 'normal', fontSize: 12 }} > 28 </Text>
          </View>

          <View style={{  width: '100%', height: "15%", flexDirection: 'row' }} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }} > Available Units: </Text>
            <Text style={{ color: '#5c0831', fontWeight: 'normal', fontSize: 12 }} > 28 </Text>
          </View>

          <View style={{  width: '100%', height: "15%", flexDirection: 'row' }} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }} > Sold Out Units: </Text>
            <Text style={{ color: '#5c0831', fontWeight: 'normal', fontSize: 12 }} > 0 </Text>
          </View>

        </View>

        <View style={{  width: '30%' }} >
      
          <View style={{  width: '100%', height: "15%",  marginTop: 15 }} >
            <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 14 }} > Units Available: </Text>
          </View>

          <View style={{  width: '100%', height: "22%", flexDirection: 'row' }} >
              <Image style={{ width: 30,height: '100%', resizeMode: 'stretch'  }} source={ require('../../images/unit-20.png') } />
              <Text style={{fontSize:14,fontWeight:'bold',width: '50%', height: '100%', textAlign: 'center' }}> 19 </Text>
          </View>

          <View style={{  width: '100%', height: "22%", flexDirection: 'row' }} >
              <Image style={{ width: 30,height: '100%', resizeMode: 'stretch'  }} source={ require('../../images/unit-10.png') } />
              <Text style={{fontSize:14,fontWeight:'bold',width: '50%', height: '100%', textAlign: 'center'}} > 19 </Text>
          </View>

          <View style={{  width: '100%', height: "22%", flexDirection: 'row',}} >
              <Image style={{ width:30,height: '100%', resizeMode: 'stretch'  }} source={ require('../../images/unit-5.png') } />
              <Text style={{fontSize:14,fontWeight:'bold',width: '50%', height: '100%', textAlign: 'center'  }} > 19 </Text>
          </View>
        </View>
        <View style={{  width: '5%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 15,height: 15, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
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
export default section4;