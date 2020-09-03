
import React, { Component } from 'react';
import {
  Text,
  YellowBox,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import AnimateLoadingButton from 'react-native-animate-loading-button';
import { Hoshi, Makiko } from 'react-native-textinput-effects';
import DatePicker from 'react-native-datepicker'
import DeviceInfo from 'react-native-device-info';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
//Import library for AddCalendarEvent
import moment from 'moment';


let cont_id, cname, deviceId, authvalue;
let currentdate, sid;
let EVENT_TITLE, EVENT_COMMENT;
let status = [ {
  id: '2',
  value: 'Follow up',
}, {
  id: '3',
  value: 'Not Responding',
}, {
  id: '4',
  value: 'Interested',
}, {
  id: '5',
  value: 'Not Interested',
}, {
  id: '6',
  value: 'Converted',
}, ]

const utcDateToString = (momentInUTC) => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};
class comment_add extends Component {

  static navigationOptions = {
    padding: 10,
    headerTitle: '',

    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackground: (
      <Image
        style={{ width: '100%', height: '100%', flex: 3 }}
        source={require('../../images/toolbar_main.png')}
      />
    ),
  };

  constructor (props) {
    super(props);
    this.state = {

      comment: '',
      date: '',
      svalue: '',
      cstatus: '',
      date2: ""
    };

  }
  async componentDidMount() {

    var that = this;
    
    var date = new Date().getDate() + 1; //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        year + '-' + month + '-' + date + ' ',
    });





  }

  handleChange_property(value) {

    var property_id = status.filter(function (item) {
      return item.value == value;
    }).map(function ({ id, value }) {
      return id;
    });

    this.setState({
      svalue: property_id,
      cstatus: value,
    });

  }


  render() {

    const { params } = this.props.navigation.state;
    cont_id = params ? params.cid : null;
    cname = params ? params.cname : null;
    deviceId = params ? params.deviceId : null;
    authvalue = params ? params.authvalue : null;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Update Contact Status        </Text>


        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20, marginBottom: 15 }}>
          <Dropdown
            label='Contact Status'
            labelPadding={0}
            labelHeight={5}
            containerStyle={{ width: '100%' }}
            data={status}

            onChangeText={(value) => {
              this.handleChange_property(value)
            }}
            valueExtractor={({ value }) => value}
          />



        </View>

        <View style={{
          marginBottom: 10, borderWidth: 1,
          padding: 5
        }}>


          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Your comment about the contact"
            placeholderTextColor="grey"
            numberOfLines={6}
            multiline={true}
            onChangeText={(text) => { this.setState({ comment: text }) }}
          />
        </View>

        <DatePicker
          style={{ width: "100%" }}
          date={this.state.date2}
          mode="date"
          placeholder="Select Date"
          format="YYYY-MM-DD"
          minDate={this.state.date}

          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => { this.setState({ date2: date }) }}
        />

        <View style={{ flex: 1, justifyContent: 'center', marginTop: 25 }}>
          <AnimateLoadingButton
            ref={c => (this.loadingButton = c)}
            width={300}
            height={45}
            title="Submit"
            titleFontSize={16}
            titleFontFamily="nexa_bold"
            titleColor="rgb(255,255,255)"
            backgroundColor="#5c0831"
            borderRadius={4}
            onPress={() => {
              this.loadingButton.showLoading(true);


              if (!this.state.svalue.length) {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Select Contact Status', ToastAndroid.SHORT);
                return;
              }

              if (this.state.comment.length == 0) {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Enter Commant', ToastAndroid.SHORT);
                return;
              }
              if (!this.state.date2.length) {
                this.loadingButton.showLoading(false);
                ToastAndroid.show('Please Select Date', ToastAndroid.SHORT);
                return;
              }

              var integer = parseInt(this.state.svalue, 10);
              if (authvalue !== null) {
                fetch('https://amaapi.qayad.com/api/', {
                  method: 'post',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    mode: "iUyQObYfRijSuI98N0CwJQ==",
                    adid: deviceId,
                    auth: authvalue,
                    cont_id: cont_id,
                    cont_status: integer,
                    cont_comnt: this.state.comment,
                    rechk_date: this.state.date2,

                  })
                }).then((response) => response.json())
                  .then((responseJson) => {
                    // alert(JSON.stringify(responseJson));
                    // alert(responseJson[0].status);

                    if (responseJson[ 0 ].status == 'false') {

                      ToastAndroid.show('Error , Try Again', ToastAndroid.SHORT);
                      this.loadingButton.showLoading(false);
                      //this.props.navigation.navigate('Second', { Email: UserEmail });
                      //this.props.navigation.navigate('registration');
                    } else if (responseJson[ 0 ].status == 'true') {

                      ToastAndroid.show('Successfully Inserted ', ToastAndroid.SHORT);

                      EVENT_COMMENT = 'Status :' + this.state.cstatus + '\n' + 'Comment :' + this.state.comment;
                     
                      const eventConfig = {
                        title: 'Follow up on Qayad Lead :' + cname,
                        startDate: utcDateToString(this.state.date2),
                        endDate: utcDateToString(moment.utc(this.state.date2).add(1, 'hours')),
                        notes: EVENT_COMMENT,

                      };

                      AddCalendarEvent.presentEventCreatingDialog(eventConfig)
                        .then(
                          (eventInfo) => {
                            //alert('eventInfo -> ' + JSON.stringify(eventInfo));
                            ToastAndroid.show('eventInfo -> ' + JSON.stringify(eventInfo), ToastAndroid.SHORT);
                            this.props.navigation.navigate('contact_view');
                            this.loadingButton.showLoading(false);
                          }
                        )
                        .catch((error) => {
                          // handle error such as when user rejected permissions
                          //  alert('Error -> ' + error);
                          ToastAndroid.show('Error -> ' + error, ToastAndroid.SHORT);
                          this.loadingButton.showLoading(false);
                        });
                    }


                  }).catch((error) => {
                    console.error(error);
                  });
              }

            }
            }
          />
        </View>

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
  textArea: {
    padding: 20,
    backgroundColor: "#d0d3d9",
    justifyContent: "flex-start",
    textAlignVertical: 'top',
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
    width: '100%',
    height: 45,
    padding: 10,
    marginTop: 35,
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
export default comment_add;