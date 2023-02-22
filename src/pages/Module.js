import * as React from 'react';
import { View,Text, FlatList, ActivityIndicator, TouchableOpacity, SafeAreaView,StyleSheet, StatusBar} from 'react-native';
import { useState, useEffect } from 'react';
import Card from '../components/Card.js';


function Module(){
  const [isLoading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const [modulesCategories, setModulesCategories] = useState([])
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();

  

  const getModules = async () => {
    try {
      const response = await fetch("http://192.168.1.19:8000/api/modules")
      const json = await response.json();
      setModules(json)
      // console.log(modules[0].name)s
    } catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  const getModulesCategories = async () =>{
    const response = await fetch('http://192.168.1.19:8000/api/modulescategories')
    const json = await response.json();
    setModulesCategories(json)
    // console.log(modulesCategories)
  }

  const getCategories = async () => {
    const response = await fetch('http://192.168.1.19:8000/api/categories')
    const json = await response.json();
    setCategories(json);
    // console.log(categories);
  }

  useEffect(()=>{
    getModules();
    getModulesCategories();
    getCategories();
  }, [])
  
  const Item = ({item, onPress, backgroundColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
      {/* <Text style={[styles.title]}>{item.name}</Text> */}
      <Card categorie={item.name}/>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? console.log(selectedId) : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={modules}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Module;