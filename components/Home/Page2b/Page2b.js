import React, { Component } from 'react';
import {
  View, FlatList, ActivityIndicator, AsyncStorage,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
let deviceId, authvalue;

//import Database from '../../Database/database';
//const db = new Database();
class Page2b extends Component {
  static navigationOptions = ({ navigation }) => {
    return {

      // headerRight: () => (

      //   <TouchableOpacity
      //     onPress={
      //       () => navigation.navigate('contact_add')}>
      //     <Image
      //       style={{ width: 25, height: 25, marginRight: 10 }}
      //       source={require('../../images/edit-icon.png')}
      //       on
      //     />
      //   </TouchableOpacity>
      // ),

    };
  };
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }


  async componentDidMount() {
    authvalue = await AsyncStorage.getItem('Auth');
    this.makeRemoteRequest();
    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.makeRemoteRequest()
    })
  }
  componentWillUnmount() {
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
          mode: "8D8x0Sbnj89VrQDMcITyDw==",
          led_type: "zT2F3FKz8kQ=",
          adid: deviceId,
          auth: authvalue,
        })

      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson.QayadLeads,
            error: responseJson.error || null,
            loading: false,
          });

          // alert( JSON.stringify(this.state.data)  );



          this.arrayholder = responseJson.QayadLeads;


          
        })

        .catch((error) => {
          console.log(error);

          this.setState({ error, loading: false });
        })
        .finally(() => {
          this.setState({
            loading: false
          })
        });
    }



  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ backgroundColor: "#F0F0F0", width: '100%', height: 60, flex: 1, flexDirection: 'row', marginBottom: 3, marginLeft: 5 }}
        onPress={() =>
          this.props.navigation.navigate('contact_view', {
            leadid: item.id,
            client_name: item.client_name,
            client_number: item.client_number,
            assign_date: item.assign_date,
            duration: item.duration,
            agent_name: item.agent_name,
          })
        }>
        <View style={{ width: '97%', flex: 1, flexDirection: "column", }}>
       
        <View style={{ height: '90%', flex: 1, flexDirection: "row", }}>
        <View style={{ width: '50%', flex: 1, flexDirection: "column", }}>

<Text style={{ color: '#003342', fontWeight: 'normal', fontSize: 12 }} > {item.client_name}</Text>
<Text style={{ color: '#003342', fontWeight: 'normal', fontSize: 12 }} > {item.client_number}</Text>

</View>

<View style={{ width: '30%', flex: 1, flexDirection: 'column', }}>
<Text style={{ color: '#002632', fontWeight: 'normal', fontSize: 12 }} > {item.assign_date}</Text>
<Text style={{ color: '#002632', fontWeight: 'normal', fontSize: 12 }} > {item.duration}</Text>


</View>
           
          </View>
         
          <View style={{ height: '10%', flex: 1, flexDirection: "row", alignItems:"center"}}>

          <Text style={{ width: '30%',color: '#003342', fontWeight: 'bold', fontSize: 12, }} > Agent Name</Text>
         <Text style={{ width: '70%',color: '#003342', fontWeight: 'normal', fontSize: 12 }} > {item.agent_name}</Text>

</View>
          
          
        </View>


        <View style={{ width: '3%', backgroundColor: "#003342", justifyContent: 'center', alignContent: 'center' }} >
          <Image style={{ width: 10, height: 10, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../../images/right-arrow.png')} />

        </View>

      </TouchableOpacity>
    )
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.client_name.toUpperCase()} ${item.client_number} ${item.duration} ${item.agent_name}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <TouchableOpacity
        onPress={
          () => navigation.navigate('contact_add')}>
        <Image
          style={{ width: 25, height: 25, marginRight: 10 }}
          source={require('../../images/add_contact.png')}

        />
      </TouchableOpacity>
    );
  };

  render() {

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme
          round
          inputContainerStyle={{ backgroundColor: '#fff' }}
          onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
          value={this.state.value}
        />
        <View style={{ backgroundColor: "#fff", width: '100%', height: 40, flexDirection: 'row', marginBottom: 3 }}
        >


          <Text style={{ width: '50%', color: '#003342', alignSelf: 'center', fontWeight: 'bold', fontSize: 12, paddingLeft: 5 }} > Name /  Phone No</Text>

          <Text style={{ width: '50%', color: '#003342', alignSelf: 'center', fontWeight: 'bold', fontSize: 12 }} >  Date / Duration</Text>




        </View>
       {/* <Text> {JSON.stringify(this.state.data)}</Text> */}
        {this.state.loading ? <ActivityIndicator style={{
          position: 'absolute', left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }} size="large" color="#003342" /> : (
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => item.id}
              extraData={this.state}
            //  ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 0,

    flex: 1,
    flexDirection: 'column'
  },
  title:
  {
    color: '#003342',
    padding: 5,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,

  },

});
export default Page2b;