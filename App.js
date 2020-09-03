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
import Test from './components/test';
import signin_screen from './components/Signin_screen';
import profile from './components/profile';
import change_password from './components/change_password';
import registration_screen from './components/Registration_screen';
import forget_screen from './components/forget_screen';
import Home_screen from './components/Home_screen';
import Otp_screen from './components/Otp_screen';
import Dash_navigation from './components/Home/dashboard_navigation';
import app_view from './components/Home/Page2a/app_view';
import contact_view from './components/Home/Page3/contact_view';
import contact_add from './components/Home/Page3/contact_add';
import comment_add from './components/Home/Page3/comment_add';
import contact_edit from './components/Home/Page3/contact_edit';




import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
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


const DrawerNavigatorExample  = createStackNavigator({
  // Splash:splash_screen,
  // Login:login_screen,
  // Forget:Forget_screen,
  // Home:Home_screen,

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },

  },

  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },

  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },

  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Splash: {
    screen: splash_screen,
  },
  Test: {
    screen: Test,
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
  change_password: {
    screen: change_password,
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

  App_view: {
    screen: app_view,
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
  comment_add: {
    screen: comment_add,
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


},
   {
 
    initialRouteName: 'Login',
     //initialRouteName: 'Test',

}
  );
  
export default createAppContainer(DrawerNavigatorExample );