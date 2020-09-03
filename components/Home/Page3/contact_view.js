
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  CheckBox,
  ScrollView
} from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import DeviceInfo from 'react-native-device-info';
let deviceId, authvalue;
let leadid, cname, cnumber, assign_date, duration, agent_name;

const actions = [
  {
    text: "Add Comment",
    icon: require("../../images/edit-icon.png"),
    name: "bt_comment",
    position: 2,
    color: "#003342"
  },

];
class contact_view extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {

      // headerRight: () => (

      //     <TouchableOpacity 
      //     onPress={
      //       () => navigation.navigate('Contact_edit')}>
      //   <Image
      //     style={{width:25,height:25,marginRight:10}}
      //     source={require('../../images/edit-icon.png')}
      //     on
      //   />
      // </TouchableOpacity>
      // ),

    };
  };


  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      empty_txt:""
    };

    this.arrayholder = [];
  }

  async componentDidMount() {
    authvalue = await AsyncStorage.getItem('Auth');
    //this.makeRemoteRequest();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.makeRemoteRequest()

    })

  }
  componentWillUnmount () {
    this.focusListener.remove()
  }
  makeRemoteRequest = () => {
    deviceId = DeviceInfo.getDeviceId();

    this.setState({ loading: true });
    if (authvalue !== null) {
      fetch('https://amaapi.qayad.com/api/', {

        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          mode: "afXRNM1LItRLACeszcnexA==",
          adid: deviceId,
          auth: authvalue,
          lid: leadid
        })

      }).then((response) => response.json())
        .then((responseJson) => {

          if(responseJson[1].CommentList && responseJson[1].CommentList.length )
          {
          
            this.setState({
              empty_txt: "",
              data: responseJson[1].CommentList,
              error: responseJson.error || null,
              loading: false,
            });
          }
          else{
      
            this.setState({
              empty_txt: "No Comments",
              data: responseJson[1].CommentList,
              error: responseJson.error || null,
              loading: false,
            });
          }
          

         

          
 
        })
        .catch((error) => {
          console.log(error);

          this.setState({ error, loading: false });
        })
        .finally(() => {
          this.setState({
            isLoading: false
          })
        });
    }



  };

  renderItem = ({ item }) => 
  {
    return (
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0", width: '100%', flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}
        onPress={() =>
          this.props.navigation.navigate('contact_view', {
            led_id: item.led_id,
            led_date: item.led_date,
            led_txt: item.led_txt,
            led_status: item.led_status,
            led_flowup_date: item.led_flowup_date,
            comt_status_name: item.led_status_name,
            

          })
        }>

      


        <View style={{ width: '96%', }}>
          <View style={{ backgroundColor: "#F0F0F0", width: '100%', height: 30, flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}>

            <Text style={{ width: '35%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} >Date :</Text>
            <Text style={{ width: '65%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.led_date}</Text>

          </View>

          <View style={{ backgroundColor: "#F0F0F0", width: '100%', height: 30, flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}>

            <Text style={{ width: '35%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} >Status :</Text>
            <Text style={{ width: '65%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.led_status_name}</Text>

          </View>
          <View style={{ backgroundColor: "#F0F0F0", width: '100%', height: 30, flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}>

<Text style={{ width: '35%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} >Follow-up Date :</Text>
<Text style={{ width: '65%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.led_flowup_date}</Text>

</View>
          <View style={{ backgroundColor: "#F0F0F0", width: '100%',  flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}>

            <Text style={{ width: '35%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12, paddingLeft: 5 }} >Comment :</Text>
            <Text style={{ width: '65%', color: '#003342', alignSelf: 'center', fontWeight: 'normal', fontSize: 12 }} > {item.led_txt}</Text>

          </View>
        </View>


        <View style={{ width: '3%', backgroundColor: "#003342", justifyContent: 'center', alignContent: 'center' }} >
          <Image style={{ width: 10, height: 10, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../../images/right-arrow.png')} />

        </View>

      </TouchableOpacity>
    )
  }

  render() {
  
    const { params } = this.props.navigation.state;
    leadid = params ? params.leadid : null;
    cname = params ? params.client_name : null;
    cnumber = params ? params.client_number : null;
    assign_date = params ? params.assign_date : null;
    duration = params ? params.duration : null;
    agent_name = params ? params.agent_name : null;
    return (

      <View source={require('../../images/background_right.png')} style={styles.container} behavior="padding" enabled>


        <Text style={styles.title}>
          Contact Detail
        </Text>

        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <Text style={styles.input_title}>Client Name</Text>
          <Text style={styles.input}>{cname}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Contact Number</Text>
          <Text style={styles.input}>{cnumber}</Text>
        </View>


        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}> Date</Text>
          <Text style={styles.input}>{assign_date}</Text>
        </View>


        <View style={{ marginBottom: 10}}>
          <Text style={styles.input_title}>Duration</Text>
          <Text style={styles.input}>{duration}</Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Agent Name</Text>
          <Text style={styles.input}>{agent_name}</Text>
        </View>

        <Text style={styles.title}> Status / Comments  </Text>

        {/* <Text style={styles.input_title}>{JSON.stringify(this.state.data)}</Text>  */}
        <Text style={styles.input_empty}>{this.state.empty_txt}</Text> 
        {this.state.loading ? <ActivityIndicator style={{
          position: 'absolute', left: 0,
          right: 0,
          top: 10,
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'flex-end'
        }} size="large" color="#003342" /> : (
          
          <FlatList
        
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        //  ItemSeparatorComponent={this.renderSeparator}
        // ListHeaderComponent={this.renderHeader}
    
        />


          )}
    
       


        {/* <FloatingAction
          actions={actions}
          color={"#003342"}
          onPressItem={name => {
            //  console.log(`selected button: ${name}`);

            if (name == "bt_comment") {

              this.props.navigation.navigate('comment_add', {
                cid: cid,
                deviceId: deviceId,
                authvalue: authvalue,
                cname:cname

              })
            }
          }}
        /> */}
      </View>

    );

  }
}


const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection: 'column',

  },


  title:
  {
    width: '100%',
    color: '#003342',
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    borderBottomEndRadius: 1,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingBottom: 5
  },
  input_empty: {
    
    fontSize: 14, color: '#003342', fontWeight: "normal",marginLeft:20,alignSelf:"center"

  },
  input_title:
  {
    
    fontSize: 14, color: '#313131', fontWeight: "bold",marginLeft:20

  },
  input: {
    fontSize: 14,
    color: '#000',
    borderBottomEndRadius: 1,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginLeft:20
  }
  ,
});
export default contact_view;