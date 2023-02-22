import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

class Exercice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getDataFromAPI()
  }

  getDataFromAPI = async () =>{
    // const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=20"
    const endpoint = "http://192.168.1.19:8000/api/modules"
    const res = await fetch(endpoint)
    const data = await res.json()
    this.setState({items :data})
  }
  _renderItem = ({item, index}) => {
    let {cardText, card, cardImage,} = styles
    const testAlert = () => { alert('toto');}
    
    return (

      <TouchableOpacity style={card}  onPress={testAlert} >
          <FontAwesomeIcon icon={faHtml5} style={styles.icon} size={75}/>
            <Text style={cardText}>{item.name}</Text>
        </TouchableOpacity>
    )
  }
    render() {
    // const navigation = useNavigation();
      let {container, loader} = styles
      let {items} = this.state

      if (items.length === 0){
        return(
          <View style={loader}>
            <ActivityIndicator size="large" />
          </View>
        )
      }
    return (
      <FlatList
      style={container}
      data={items}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={this._renderItem}
      />
    );
  }
}
const styles = StyleSheet.create({
   icon: {

  },
  container:{
    marginTop : 40,
  },
  cardText: {
    fontSize : 20,
    padding : 10,
    textAlign : 'center',
  },

  card:{
    backgroundColor : '#28abe2',
    marginBottom : 10,
    marginLeft : "2%",
    width : "96%",
    shadowColor : '#000',
    shadowOpacity : 1,
    ShadowOffset : {
      width : 3,
      height: 3,
    }
  },
  loader:{
    flex : 1,
    alignItems: "center",
    justifyContent :"center",
  }
})

export default Exercice;