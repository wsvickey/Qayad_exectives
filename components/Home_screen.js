import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { Left, Right, Icon } from 'native-base';
import { Header } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import SecondPage from './SecondPage';
import login_screen from './Splash';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid, 
  } from 'react-native';


   class Home_screen extends Component 
  {
    static navigationOptions = {
      title: 'Home',
    };

    constructor() {
           super();
           this.state = {
                 dataSource: []
           };   
    }

    renderItem = ({item})=> {
      
      return (
       
       <TouchableOpacity  
       style={{ flex: 1, flexDirection: 'row', marginBottos: 3 }} 
       onPress={()=> 
        this.props.navigation.navigate('Appview', {
          auther: item.author,
          title: item.book_title,
          pic: item.image,
        })
      }>
    
       <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: item.image }} /> 
       <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} > 
       <Text  styLe={{ color: 'green', morginBottom: 15}} >Book {item.book_title} </Text> 
       <Text  style={{  color: 'red' }} > {item.author} </Text> 
         </View> 
       </TouchableOpacity> 
        )
    }

    componentDidMount() {
         const url = "https://www.json-generator.com/api/json/get/ccLAsEcOSq?index=1";
         fetch(url).then((response)=>response.json())
                   .then((responseJson)=> {
                     this.setState({
                       dataSource : responseJson.book_array
                     })
                     console.log(responseJson.book_array);
                    })
                    .catch((error)=> {
                      console.log(error);
                    })      
    }


    render() {
       return (
         <View> 
            <Header style={{color:"#fff",height:202}}
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
             <Text> Hello</Text>
             <Text> Hello</Text>
             <Button
        onPress={() => this.props.navigationProps.toggleDrawer()
        }
        title="Go back home"
      />
             <FlatList 
              data={this.state.dataSource}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.book_title}
              />
         </View>
          )

    }
  }
  export default Home_screen;