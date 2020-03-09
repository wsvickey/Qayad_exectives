import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  CheckBox,
  ScrollView
} from 'react-native';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
class Section4 extends Component {

  state = {
    value: 'first',
  };
  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          Personal Information
        </Text>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Applicant First Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            underlineColorAndroid="transparent"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Applicant Last Name</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"

            placeholderTextColor="#fff"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>S/O , D/O, W/O </Text>

          <RadioButton.Group
            onValueChange={value => this.setState({ value })}
            value={this.state.value}
          >
            <View style={{ marginBottom: 10, flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#fff', marginRight: 10 }}>
                <Text style={{ alignSelf: 'center' }}>Son of</Text>
                <RadioButton value="Son of" />
              </View>

              <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginRight: 10 }}>
                <Text style={{ alignSelf: 'center' }}>Daughter of</Text>
                <RadioButton value="Daughter of" />
              </View>

              <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                <Text style={{ alignSelf: 'center' }}>Wife of</Text>
                <RadioButton value="Wife of" />
              </View>
            </View>

          </RadioButton.Group>

        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Name of (S/O,D/O,W/O) </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Name"

            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>



        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>CNIC# : </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter CNIC"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Email Address </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Mailing Address </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Mailing Address"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Permanent Address </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Permanent Address"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Phone No Res : </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Phone No Res"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={styles.input_title}>Mobile No : </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Mobile No :"
           input="number"
            placeholderTextColor="#5c0831"
            textAlignVertical={'center'}
            autoCapitalize="none"

          />
        </View>
        <View style={{ paddingBottom: 50 }}>
          <Text style={styles.input_title}>Mobile No 2: </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Mobile No 2 :"
           input="number"
            placeholderTextColor="#ebc2c0"
            textAlignVertical={'center'}
            autoCapitalize="none"

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
  input: {
    color: '#ebc2c0',
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


});
export default Section4;