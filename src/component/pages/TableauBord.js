import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

class TableauBord extends React.Component {
    render() {
    // const navigation = useNavigation();

    return (
      <View>
        <Text>Bienvenu [Prénom]</Text>

        <Button title="Go to lessons" onPress={() => this.props.navigation.navigate('Lesson')} />
        <Button title="Go to exercices" onPress={() => this.props.navigation.navigate('Exercice')} />
      </View>
    );
  }
}

export default TableauBord;