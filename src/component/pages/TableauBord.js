import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button, Image } from 'react-native';
// import PlanningIMG from '../../css/planningbanniere.png';

class TableauBord extends React.Component {
    render() {
    // const navigation = useNavigation();

    return (
      <View>
        <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{uri: '../../css/planningbanniere.png'}} style={{width: 200, height: 200}} />
          <Text style={{position: 'absolute'}}>Planning</Text>
        </View>

        <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{uri: '../../css/planningbanniere.png'}} style={{width: 200, height: 200}} />
          <Text style={{position: 'absolute'}}>Annonce de jobs</Text>
        </View>

        <View style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={{uri: '../../css/planningbanniere.png'}} style={{width: 200, height: 200}} />
          <Text style={{position: 'absolute'}}>Actualités</Text>
        </View>

        <Button title="Go to lessons" onPress={() => this.props.navigation.navigate('Lesson')} />
        <Button title="Go to exercices" onPress={() => this.props.navigation.navigate('Exercice')} />
      </View>
    );
  }
}

export default TableauBord;