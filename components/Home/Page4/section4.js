import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  CheckBox,
  ScrollView
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Sae ,Hoshi} from 'react-native-textinput-effects';
class Section4 extends Component {

  state = {
    value: 'first',
  };
  render() {
    let data = [ {
      value: 'S/O',
    }, {
      value: 'D/O',
    }, {
      value: 'W/O',
    }];
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Personal Information
        </Text>

        <View style={{ marginBottom: 20 ,flex:1,flexDirection:'row'}}>

          <Hoshi
            style={{ width: '50%',marginRight:10}}
             label={'First Name'}
             inputStyle={{ color: '#5C0731',fontSize:14 }}
             labelStyle={{ color: '#a38e8b',fontSize:10 }}
             height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}
       
          />

<Hoshi
            style={{ width: '50%'}}
             label={'Last Name'}
             inputStyle={{ color: '#5C0731',fontSize:14 }}
             labelStyle={{ color: '#a38e8b',fontSize:10 }}
             height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}
       
          />

        </View>
        
        <View style={{ marginBottom: 10 ,flex:1,flexDirection:'row', fontSize: 10}}>
          <Dropdown
        
            label='Select Option'
            labelPadding={0}
            labelHeight={13}
            
            fontSize={12}
            dropdownPosition={0}
            labelFontSize={10}
            containerStyle={{ width: '30%',height:45,marginRight:10,fontSize:10,color: '#5C0731'}}
            data={data}
            
          />
          <Hoshi
            style={{ width: '70%' }}
            label={'Name of (S/0 ,D/O ,W/O)'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />

        </View>



        <View style={{ marginBottom: 10 }}>
         
        <Hoshi
            style={{ width: '100%' }}
            label={'CNIC # : (xxxxxxxxxxxxx)'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
              <Text style={{fontSize:10,color:'red'}}>Note: Write CNIC Number without DASH(-)</Text>
    
        </View>



        <View style={{ marginBottom: 10 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Email Address'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            // this is used as active border color
            borderColor={'#fff'}
            // active border height
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>

        <View style={{ marginBottom: 10 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Mailing Address'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>

        <View style={{ marginBottom: 10 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Permanent Address'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>
        <View style={{ marginBottom: 10 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Phone No Res'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>
        <View style={{ marginBottom: 10 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Mobile No'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>
        <View style={{ marginBottom: 40 }}>
        <Hoshi
            style={{ width: '100%' }}
            label={'Mobile No 2'}
            inputStyle={{ color: '#5C0731', fontSize: 14 }}
            labelStyle={{ color: '#a38e8b', fontSize: 10 }}
            height={25}
            borderColor={'#fff'}
            labelPadding={0}
            borderPadding={0}
            borderHeight={2}

          />
        </View>
       
        <TouchableOpacity style={styles.buttonStyle}
			 onPress={() => 
            {
              this.props.navigation.navigate('Sec5_nominee');  
            }
            
            }
            
		  >
         
			 
       <Text style={styles.textStyle}>Enter Nominee Info</Text>
		  </TouchableOpacity>
    
      
      </ScrollView>
    );

  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    color: '#5c0831',
    marginBottom: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },
  input_title:
  {
    fontSize: 12,
    color: '#5c0831',
    fontWeight: 'bold',
    marginBottom: 5,

  },
  input: {
    color: '#5c0831',
    fontWeight: "normal",
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  }
  ,
  EdittextStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    margin: 10,
    color: 'white',
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },

  buttonStyle: {
    width:'100%',
   height: 45,
padding:10,
backgroundColor:'#5c0831',
borderRadius:5,
justifyContent: 'center', 
alignItems: 'center',

marginBottom: 36

},
textStyle: {
  fontSize:20,
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',

},
});
export default Section4;