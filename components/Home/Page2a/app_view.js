
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
let app_data;

let aid,reg_no,pid,psid,u_no,u_size,cid,fname,lname,of,of_name,email,cnic,phone,mobile,mobile_2,
c_type,
nid,n_fname,n_lname,n_of,n_of_name,n_email,n_cnic,n_phone,n_mobile,n_mobile_2,n_c_type,
ja_opt,reg_pid,p_type,ap_desc,ap_type,c_statge,c_pay_status,ap_date;
class app_view extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
  
     
     
    };
  };
  async componentDidMount() {
    //alert(app_data.c_pay_status);
 
 
   }
  
  render() {
    const { params } = this.props.navigation.state;
    app_data = params ? params.app_data : null;

    return (
      <ImageBackground source={require('../../images/BG_03.png')} style={styles.container} behavior="padding" enabled>
  
      <ScrollView >
      <View style={{  flex: 1, flexDirection: 'row', fontSize: 10, paddingLeft: 20 ,marginTop:15}}>

<View style={{ width: '50%' }}>
  
  <Text style={{ fontSize: 12, color: '#000'}}>Application Date :</Text>
</View>

<View style={{ width: '50%' }}>
  <Text style={styles.input_title}>{app_data.ap_date}</Text>
</View>
</View>

      <Text style={styles.title}>  Applicant Information </Text>

      <View style={{ marginBottom: 10, flex: 1, flexDirection: 'row', fontSize: 10, paddingLeft: 20 }}>

<View style={{ width: '50%' }}>
  <Text style={styles.input_title}>First Name</Text>
  <Text style={styles.tinput}>{app_data.fname}</Text>
</View>

<View style={{ width: '50%' }}>
  <Text style={styles.input_title}>Last Name</Text>
  <Text style={styles.tinput}>{app_data.lname}</Text>
</View>
</View>

<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>{app_data.of}</Text>
<Text style={styles.tinput}>{app_data.of_name}</Text>
</View>
<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>CNIC #</Text>
<Text style={styles.tinput}>{app_data.cnic}</Text>
</View>
       
<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>Contact Number </Text>
<Text style={styles.tinput}>{app_data.mobile}</Text>
</View>
{/* Booking Detail ....................... */}

<Text style={styles.title}>  Applicant Booking Detail </Text>
<View style={{ marginBottom: 10, flex: 1, flexDirection: 'row', fontSize: 10, paddingLeft: 20 }}>

<View style={{ width: '50%' }}>
  <Text style={styles.input_title}>Application No</Text>
  <Text style={styles.tinput}>{app_data.aid}</Text>
</View>

<View style={{ width: '50%' }}>
  <Text style={styles.input_title}>Status</Text>
  <Text style={styles.tinput}>{app_data.c_pay_status}</Text>
</View>
</View>

<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>Registration Number </Text>
<Text style={styles.tinput}>{app_data.reg_no}</Text>
</View>


<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>Unit No</Text>
<Text style={styles.tinput}>{app_data.u_no}</Text>
</View>


 


{/* Next to Kin ....................... */}
<Text style={styles.title}>  Next to Kin Information  </Text>

<View style={{ marginBottom: 10, flex: 1, flexDirection: 'row', fontSize: 10, paddingLeft: 20 }}>

<View style={{ width: '50%' }}>
<Text style={styles.input_title}>First Name</Text>
<Text style={styles.tinput}>{app_data.n_fname}</Text>
</View>

<View style={{ width: '50%' }}>
<Text style={styles.input_title}>Last Name</Text>
<Text style={styles.tinput}>{app_data.n_lname}</Text>
</View>
</View>

<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>{app_data.n_of}</Text>
<Text style={styles.tinput}>{app_data.n_of_name}</Text>
</View>
<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>CNIC No</Text>
<Text style={styles.tinput}>{app_data.n_cnic}</Text>
</View>
 
<View style={{ marginBottom: 15, paddingLeft: 20 }}>
<Text style={styles.input_title}>Contact Number</Text>
<Text style={styles.tinput}>{app_data.n_mobile}</Text>
</View>
       
        </ScrollView>
      </ImageBackground>

    );

  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',

  },
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    height: 40,
    color: '#FFF',
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#5c0831',
    fontWeight: "bold",
    fontSize: 18,

    textAlignVertical: 'center'
  },
  input_title:
  {
    fontSize: 12, color: '#313131', fontWeight: "bold",

  },
  tinput: {
    fontSize: 12, color: '#000',
    borderBottomEndRadius: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  finput: {
    width: "50%",
    color: '#5c0831',
    fontWeight: "normal",
    height: 40,
    backgroundColor: "red",
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15
  },
  input: {
    color: '#5c0831',
    fontWeight: "normal",
    height: 55,
    backgroundColor: "red",
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
    width: '90%',
    height: 45,
    backgroundColor: '#5c0831',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  textStyle: {
    padding: 20,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',

  },
  
});

export default app_view;