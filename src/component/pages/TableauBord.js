import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

class TableauBord extends React.Component {
    render() {
    // const navigation = useNavigation();

    return (
      <View>
        <Text>New text</Text>

        <Button title="Go to lessons" onPress={() => this.props.navigation.navigate('Lesson')} />
      </View>
    );
  }
}

export default TableauBord;