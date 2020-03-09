import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { View, Image, TouchableOpacity,TouchableHighlight,ImageBackground,Dimensions, BackHandler ,StatusBar, StyleSheet, Alert,Text,  SafeAreaView, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';

import login_screen from '../Splash';
import forget_screen from '../forget_screen';
import Home_screen from '../Home_screen'

import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'
import New_application from './Page4/new_application'
import Page4 from './Page4/Page4'
import Page5 from './Page5/Page5'

const { width } = Dimensions.get("window");
// import {
//   handleAndroidBackButton,
//   removeAndroidBackButtonHandler,exitAlert
// } from '../utils/BackHandlerclass';

class NavigationDrawerStructure extends Component {
  constructor(props){
    super(props)
   
  }
  
  // componentDidMount() {
  //   handleAndroidBackButton(exitAlert);
  // }
  // componentWillUnmount() {
  //   removeAndroidBackButtonHandler();
  // }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  
  // logout()
  // {

  // }
  

  render() {
    
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../images/menu.png')}
            style={{ width: 25, height: 18, marginLeft: 5 }}
          />
        </TouchableOpacity>
       
      </View>
    );
  }
}

const CustomDrawerNavigation = (props) => {
 

  return (
  
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground onPress={() => {
        Alert.alert(
  'Logout',
  'Are you sure yu want to Logout ?',
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK', onPress: () => {
        props.navigation.navigate('Splash');
    
    }
    
      
  },
  ],
  {cancelable: false},
)}} source={require('../images/nav_background.png')} style={{ height: 185, backgroundColor: '#d2d2d2', opacity: 0.9}}>

        <View style={{ height: 100, backgroundColor: 'transparent',marginTop:25 }}>
      


        <View style={{width:"100%",left:5,bottom: 10,marginTop:15,flexDirection:'row' , justifyContent: 'space-between',}}>

        <View style={{ flexDirection: 'row', marginRight: 15, alignContent:'flex-end', }}>
        <Text style={{ fontFamily:'nexa_bold',color:'#fff',}} onPress={() => {props.navigation.navigate('profile')}}>Profile</Text>
               </View>
        <View style={{ flexDirection: 'row', marginRight: 15, alignSelf:'flex-end',alignContent:'flex-end'}}>
        <Text style={{ fontFamily:'nexa_bold',color:'#fff',}} onPress={() => {Alert.alert(
  'Logout',
  'Are you sure yu want to Logout ?',
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK', onPress: () => {
        props.navigation.navigate('Splash');
    
    }
     
  },
  ],
  {cancelable: false},
)}}

>Logout</Text>
<TouchableHighlight onPress={() => {Alert.alert(
  'Logout',
  'Are you sure yu want to Logout ?',
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK', onPress: () => {
        props.navigation.navigate('Splash');
    
    }
     
  },
  ],
  {cancelable: false},
)}}>
    <Image style={{height: 20, width: 25,marginLeft:10 }} source={require('../images/logout-white.png')} />
</TouchableHighlight>
               </View>
        
        
      </View>

      <TouchableHighlight onPress={() => props.navigation.navigate('profile')}>
      <Image source={require('../images/user_male.png')} style={{ height: 80, width: 120,borderBottomRightRadius:60,borderTopRightRadius:60,marginBottom:20,borderWidth:2,borderColor:'#CFC9CA' }} />
</TouchableHighlight>
          <Text style={{fontFamily: 'nexa_bold',fontSize:16,marginLeft:15 ,marginBottom:1,color:'#fff'}} >Full name Comes Here</Text>
          <Text style={{fontSize:12,marginLeft:15 ,color:'#fff',fontFamily: 'nexa_light',}} >Designation Comes here</Text>
       
        </View>

      </ImageBackground>
      <ScrollView style={{backgroundColor:'transparent'}}>
        <DrawerItems {...props} />
      </ScrollView>
     
    </SafeAreaView>
  );

}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerBackground: (
        <Image
          style={{ width:'100%', height: 100, flex: 3}}
          source={require('../images/toolbar_main.png') }
        />
      ),
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
     
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Page2,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerBackground: (
        <Image
          style={{ width:'100%', height: 100, flex: 3}}
          source={require('../images/toolbar_main.png') }
        />
      ),
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
     
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Page3,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerBackground: (
        <Image
          style={{ width:'100%', height: 100, flex: 3}}
          source={require('../images/toolbar_main.png') }
        />
      ),
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
     
      },
      headerTintColor: '#fff',
    }),
  },
});
  
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: 
  
  {
    screen: New_application,
    navigationOptions: ({ navigation }) => (
      
      {
      title: '',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('../images/toolbar_main.png') }
        />
      ),
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
     
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Page5,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerBackground: (
        <Image
          style={{ width:'100%', height: 100, flex: 3}}
          source={require('../images/toolbar_main.png') }
        />
      ),
     
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
     
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing

  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/home.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25 }]}
        />
        
      ),
    },
  },
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'My Sales',
      backgroundColor:'#FFF',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/my_sales.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25 }]}
        />
        
      ),
    },
  },

  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'My Contact List',
      backgroundColor:'#0f0f00',
      drawerBackgroundColor:'#0f0f00',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/my_contact.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  }
  ,
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'New Application',
      
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/new_application.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },

  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'FAQ / Help',
      headerTintColor: 'blue',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/faq1.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25 }]}
        />
       
      ),
    },
  },
},
{
     drawerWidth: 200,
    
    contentOptions: {
    activeTintColor: '#5C0731',
    inactiveTintColor: '#434043',
    activeBackgroundColor: 'transparent',
    inactiveBackgroundColor: 'transparent',

    labelStyle:
    {
      fontSize: 14,
      marginLeft: 10,
      fontFamily:'nexa_bold'
    
    },
  },

  iconContainerStyle: {
    opacity: 0
  },
  drawerPosition: 'left',
  contentComponent: CustomDrawerNavigation,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  drawerWidth: (width / 3) * 2,
  drawerBackgroundColor:'#fff'

});
 
export default createAppContainer(DrawerNavigatorExample,DrawerNavigatorExample);