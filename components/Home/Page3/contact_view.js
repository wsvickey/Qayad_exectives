
  import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  CheckBox,
  ScrollView
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Hoshi} from 'react-native-textinput-effects';
class contact_view extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
  
      headerRight: () => (
   
          <TouchableOpacity 
          onPress={
            () => navigation.navigate('Contact_edit')}>
        <Image
          style={{width:25,height:25,marginRight:10}}
          source={require('../../images/edit-icon.png')}
          on
        />
      </TouchableOpacity>
      ),
     
    };
  };
  state = {
    value: 'first',
  };
  render() {


    return (
    
           <ImageBackground source={require('../../images/background_right.png')} style={styles.container} behavior="padding" enabled>
  

        <Text style={styles.title}>
         Contact Detail
        </Text>

        <View style={{ marginBottom: 15,marginTop:20 }}>
       <Text style={styles.input_title}>Name</Text>
       <Text style={styles.input}>Waqas Ahmad Awan</Text>
        </View>

        <View style={{ marginBottom: 15 }}>
       <Text style={styles.input_title}>Contact Number</Text>
       <Text style={styles.input}>#923435959764</Text>
        </View>


        <View style={{ marginBottom: 15 }}>
        <Text style={styles.input_title}>Entry Date</Text>
       <Text style={styles.input}>12/16/2019</Text>
        </View>

        
        <View style={{ marginBottom: 15 }}>
       <Text style={styles.input_title}>CNIC #</Text>
       <Text style={styles.input}>6110193410747</Text>
        </View>
        <View style={{ marginBottom: 15 }}>
       <Text style={styles.input_title}>Note</Text>
       <Text style={{fontSize:14,color:'#000',}}>Data does not exist</Text>
        </View>
      
      
       
       
    
      </ImageBackground>
 
    );

  }
}


const styles = StyleSheet.create({
  container: {

    padding: 20,
    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    width:'100%',
    color: '#5c0831',
    marginBottom: 10,
    textAlign:'center',
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomEndRadius:1,
    borderBottomColor:"#000",
    borderBottomWidth:1,
    paddingBottom:10
  },
  input_title:
  {
    fontSize:14,color:'#313131',fontWeight:"bold",

  },
  input: {
    fontSize:14,color:'#000',
    borderBottomEndRadius:1,
    borderBottomColor:"#e0e0e0",
    borderBottomWidth:1,
    paddingBottom:15
  }
  ,
});
export default contact_view;