import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';
import ImagePlannig from '../../assets/planningbanniere.png';

const TableauBord = () => {

    const navigation = useNavigation();
    const imgPlanning = Image.resolveAssetSource(ImagePlannig).uri;

    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
          <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10}}>
            <Image source={{uri: imgPlanning}} style={{width: '80%', height: 200}} />
            <Text style={{position: 'absolute'}}>Planning</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
          <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
            <Image source={require('../../assets/pole_emploi.jpg')} style={{width: '80%', height: 200}} />
            <Text style={{position: 'absolute'}}>Annonce de jobs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
          <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            <Image source={require('../../assets/le_monde.webp')} style={{width: '80%', height: 200}} />
            <Text style={{position: 'absolute'}}>Actualités</Text>
          </View>
        </TouchableOpacity>
        {/* <Button title="Go to lessons" onPress={() => this.props.navigation.navigate('Lesson')} />
        <Button title="Go to exercices" onPress={() => this.props.navigation.navigate('Exercice')} /> */}
      </View>
    );
}

export default TableauBord;