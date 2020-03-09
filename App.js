import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';


import 'react-native-gesture-handler'
import splash_screen from './components/splash_screen';
import SecondPage from './components/SecondPage';
import Splash from './components/Splash';
import signin_screen from './components/Signin_screen';
import profile from './components/profile';
import registration_screen from './components/Registration_screen';
import forget_screen from './components/forget_screen';
import Home_screen from './components/Home_screen';
import Otp_screen from './components/Otp_screen';
import Dash_navigation from './components/Home/dashboard_navigation';
import contact_view from './components/Home/Page3/contact_view';
import contact_add from './components/Home/Page3/contact_add';
import contact_edit from './components/Home/Page3/contact_edit';
import new_application from './components/Home/Page4/new_application';
import section2 from './components/Home/Page4/section2';
import section3 from './components/Home/Page4/section3';
import section4 from './components/Home/Page4/section4';
class App  extends React.Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Home_screen,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorExample  = createStackNavigator({
  // Splash:splash_screen,
  // Login:login_screen,
  // Forget:Forget_screen,
  // Home:Home_screen,
  Splash: {
    screen: splash_screen,
  },
  Login: {
    screen: Splash,
  },
  Signin: {
    screen: signin_screen,
  },
  Forget: {
    screen: forget_screen,
  },
  registration: {
    screen: registration_screen,
  },
  SecondPage: {
    screen: SecondPage,
  },
  Otp: {
    screen: Otp_screen,
  },
  profile: {
    screen: profile,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
  Home: {
    //Title
    screen: Home_screen,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
    },
  },
  Dashboard: {                                                         
    //Title
    screen: Dash_navigation,
    navigationOptions: {
      header: null,
  },
  
 
 

  },
  
  contact_view: {
    screen: contact_view,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
  contact_add: {
    screen: contact_add,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
  contact_edit: {
    screen: contact_edit,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
  New_application: {
    screen: new_application,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
   
  Section2: {
    screen: section2,
    navigationOptions: {
      drawerLabel: 'Demo Screen 1',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
   
  Section3: {
    screen: section3,
    navigationOptions: {
      drawerLabel: 'Demo Screen 3',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
  Section4: {
    screen: section4,
    navigationOptions: {
      drawerLabel: 'Demo Screen 4',
      headerTintColor:'#fff',
      headerBackground: (
        <Image
          style={{ width:'100%', height: '100%', flex: 3}}
          source={require('./components/images/toolbar_main.png') }
        />
      ),
    },
  },
},
   {
  initialRouteName: 'Login',
   // initialRouteName: 'profile',
  
  }
  );
export default createAppContainer(DrawerNavigatorExample );