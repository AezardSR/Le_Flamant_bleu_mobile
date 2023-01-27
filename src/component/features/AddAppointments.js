import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, ScrollView, TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

class AddAppointments extends React.Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render() {
    // const navigation = useNavigation();
    // const [date, setDate] = useState('09-10-2021');

    return (
        <ScrollView>

<DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
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
        onDateChange={(date) => {this.setState({date: date})}}
      />            <TextInput style={styles.input} placeholder='Objet du rdv' maxLength={50} />
            <TextInput style={styles.input} placeholder='Description' multiline maxLength={100} />
            <Button title="Ajouter" />

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  datePickerStyle: {
    width: '80%',
    margin: 12,
  },
});

export default AddAppointments;