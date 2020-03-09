//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Image, ScrollView, Dimensions, KeyboardAvoidingView, TouchableOpacity ,ImageBackground} from 'react-native';
// import all basic components
import { Dropdown } from 'react-native-material-dropdown';
const screenWidth = Math.round(Dimensions.get('window').width);
export default class Page4 extends Component {
  //Screen1 Component
  render() {
    let data = [ {
      value: 'Shops',
    }, {
      value: 'Food Court',
    }, {
      value: 'Kids Area',
    }, {
      value: 'Office',
    }, {
      value: 'Apartments',
    } , {
      value: 'Suits',
    }];
    return (
      <ScrollView style={{width:'100%'}}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ImageBackground

  source={require('../../images/back_icon.png')} 
  style={{
    width: "90%",
    height: 180,
    justifyContent: "center",
    position: 'absolute',
  bottom:0,
  right:0,
  flexDirection:'row-reverse'
  }}
 
>
 
</ImageBackground>
        <View style={{ width:  '100%', height: 55, justifyContent: 'center'}}>
          <Text style={styles.title}>New Registration Application Form</Text>
        </View>

        <View style={{ width:  '90%', height: 80,alignSelf:'center' , flexDirection: 'column',marginLeft:15,marginRight:15,marginTop:15 }}>

          <Dropdown
            label='Select Property type'
            labelPadding={0}
            labelHeight={5}
            containerStyle={{ width: '100%' }}
            data={data}
          />

        </View>
        <View style={{ width:  '90%', height: 80,alignSelf:'center'   }}>

          <Dropdown
            label='Select Floor Selection'
            labelPadding={0}
            labelHeight={5}
            containerStyle={{ width: '100%' }}
            data={data}
          />

        </View>
        <View style={{  width:  '90%', height: 80,alignSelf:'center'  }}>

          <Dropdown
            label='Select Property Selection'
            labelPadding={0}
            labelHeight={5}
            containerStyle={{ width: '100%' }}
            data={data}
          />

        </View>
  
        <View style={{   width:  '90%', height: 80,alignSelf:'center' }}>
          <TouchableOpacity style={styles.buttonStyle}
           onPress={() => 
            {
              
              //Handle LOGIN
                this.props.navigation.navigate('Section2');
            }
          }


          >

            <Text style={styles.textStyle}>Next</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },

  title: {
    color: '#5C0731',
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  }, 
  buttonStyle: {
  
    height: 45,
    padding: 10,
    backgroundColor: '#5c0831',
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
 
    marginBottom: 36

  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',

  },

});