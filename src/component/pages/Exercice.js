import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

class Exercice extends React.Component {
    render() {
    // const navigation = useNavigation();

    return (
      <View>
        <Text>Add friends here!</Text>

        <Button title="TB" onPress={() => this.props.navigation.navigate('TableauBord')} />
      </View>
    );
  }
}

export default Exercice;