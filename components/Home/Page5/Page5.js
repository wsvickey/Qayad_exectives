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

class Page5 extends Component {
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
          this.props.navigation.navigate('help_detail', {
            auther: item.author,
            title: item.book_title,
            pic: item.image,
          })
        }>

{/* {item.author} */}
        <Text style={{ width: '100%', color: '#5c0831', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} >  {item.book_title} </Text>

        
        {/* <View style={{  width: '3%', backgroundColor: "#5c0831",justifyContent:'center',alignContent:'center' }} >
        <Image style={{ width: 10,height: 10, resizeMode: 'stretch' ,alignSelf:'center' }} source={ require('../../images/right-arrow.png') } />
           
      </View> */}
       
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
export default Page5;