import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { View, Image, TouchableOpacity,TouchableHighlight,ImageBackground,Dimensions, AsyncStorage ,BackHandler, StyleSheet, Alert,Text,  SafeAreaView, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer';

import Page1  from './Page1/Page1'
import Page2a from './Page2a/Page2a'
import Page2b from './Page2b/Page2b'
import Page3  from './Page3/Page3'
import Page4  from './Page4/Page4'
import Page5  from './Page5/Page5'
import Page6  from './Page6/Page6'
import change_password from './Page7/Page7'

const { width } = Dimensions.get("window");
// import {
//   handleAndroidBackButton,
//   removeAndroidBackButtonHandler,exitAlert
// } from '../utils/BackHandlerclass';
let fullname,profile_img,user_designation;
class NavigationDrawerStructure extends Component {
  constructor(props){
    super(props)
    this.state = { profile: '', }
  }
  
 
  toggleDrawer = () => {

    this.props.navigationProps.toggleDrawer();
  };
  
  
  
  async componentDidMount() {
    // this.backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   this.backAction
    // );
    AsyncStorage.getItem('fullname').then((value) =>{fullname=value});
    AsyncStorage.getItem('profile_img').then((value) =>{profile_img= value});
    AsyncStorage.getItem('user_designation').then((value) =>{ user_designation =value });
   
  }

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
      <ImageBackground onPress={() => {}} source={require('../images/nav_background.png')} style={{ height: 185, backgroundColor: '#d2d2d2', opacity: 0.9}}>

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
      text: 'OK',
       onPress: () => {
       
       
       AsyncStorage.setItem('login', 'false')
        props.navigation.push('Login');
        //props.navigation.navigate('Login');
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
       AsyncStorage.setItem('login', 'false');
        props.navigation.push('Login');
     // alert(profile_img);
      
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
      <Image 
       source={require('../images/user_male.png')} 
      // source={{uri: profile_img}}
      style={{ height: 80, width: 120,borderBottomRightRadius:60,borderTopRightRadius:60,marginBottom:20,borderWidth:2,borderColor:'#CFC9CA' }} />
     </TouchableHighlight>
          <Text style={{fontFamily: 'nexa_bold',fontSize:16,marginLeft:15 ,marginBottom:1,color:'#fff'}} >{fullname}</Text>
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
const Screen2a_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  
  Second: {
    screen: Page2a,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: 'locked-closed',
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
const Screen2b_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  
  Second: {
    screen: Page2b,
    navigationOptions: ({ navigation }) => ({
      drawerLockMode: 'locked-closed',
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
  Forth: 
  
  {
    screen: Page4,
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
  Five: 
  
  {
    screen: Page5,
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
const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Six: 
  
  {
    screen: Page6,
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
const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Seven: 
  
  {
    screen: change_password,
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
  Screen2a: {
    //Title
  
    screen: Screen2a_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Pending Assign Leads',
      backgroundColor:'#FFF',
      drawerBackgroundColor:'#0f0f00',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/pendingicon.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },
  Screen2b: {
    //Title
  
    screen: Screen2b_StackNavigator,
    navigationOptions: {
      drawerLabel: 'New Leads',
      backgroundColor:'#FFF',
      drawerBackgroundColor:'#0f0f00',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/newlead_icon.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },

  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Follow Up',
      backgroundColor:'#0f0f00',
      drawerBackgroundColor:'#0f0f00',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/followup.png')}
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
      drawerLabel: 'Interested Leads',
      
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/interested.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },
  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Converted Leads',
      
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/converted.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },
  Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Not Interested Leads',
      
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/non_interested.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },
  Screen7: {
    //Title
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Change Password',
      
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../images/changepass_icon.png')}
          style={[styles.icon, {tintColor: tintColor, width: 25, height: 25}]}
        />
        
      ),
    },
  },
 
},
{
     drawerWidth: 200,
    
    contentOptions: {
    activeTintColor: '#002632',
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