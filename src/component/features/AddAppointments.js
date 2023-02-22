import React, { useState, useEffect } from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, ScrollView, TextInput, StyleSheet } from 'react-native';

const AddAppointments = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState([]);

  const [receiver, setReceiver] = useState([]);
  const [receiverID, setReceiverID] = useState([]);

  const [created, setCreated] = useState([]);
  const [createdID, setCreatedID] = useState([]);

  const [typeAppoitments, setTypeAppoitments] = useState([]);
  const [typeAppoitmentsID, setTypeAppoitmentsID] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/api/user')
      .then(response => response.json())
      .then(data => setReceiver(data))
  }, [])

  useEffect(() => {
      fetch('http://localhost:8000/api/user')
      .then(response => response.json())
      .then(data => setCreated(data))
  }, [])

  useEffect(() => {
      fetch('http://localhost:8000/api/appointmentstypes')
      .then(response => response.json())
      .then(data => setTypeAppoitments(data))
  }, [])

  const handleSubmit = (event) => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({titleDetails: title, descriptionDetails: description, dateDetails: date, receiver_id: receiverID, create_id: createdID, appointments_types_id: typeAppoitmentsID})
      };

      fetch('http://localhost:8000/api/appointments', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))
          event.preventDefault();
  }

    return (
        <ScrollView>

            <TextInput value={title} onChange={(event) => {setTitle(event.target.value)}} name="titleDetails" style={styles.input} placeholder='Objet du rdv' maxLength={50} />
            <TextInput value={description} onChange={(event) => {setDescription(event.target.value)}} name="descriptionDetails" style={styles.input} placeholder='Description' multiline maxLength={100} />
            <Button onClick={handleSubmit} type="submit" title="Ajouter" />

        </ScrollView>
    );
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