import * as React from 'react';
import { View,Text, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, navigation} from 'react-native';
import { useState, useEffect } from 'react';
import Categorie from './Categorie.js';


function Module({navigation}){
  const [isLoading, setLoading] = useState(true);
  const [modules, setModules] = useState([]);
  const [modulesCategories, setModulesCategories] = useState([])
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();

  const getModules = async () => {
    try {
      const response = await fetch(`${API_PATH}/modules`)
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
    const response = await fetch(`${API_PATH}/modulescategories`)
    const json = await response.json();
    setModulesCategories(json)
    // console.log(modulesCategories)
  }

  const getCategories = async () => {
    const response = await fetch(`${API_PATH}/categories`)
    const json = await response.json();
    setCategories(json);
    // console.log(categories);
  }

  useEffect(()=>{
    getModules();
    // getModulesCategories();
    // getCategories();
  }, [])
  
  const ModuleStyle = ({item, onPress}) => (
    <TouchableOpacity onPress={onPress}  style={stylesCard.cardContent}>
      <Text style={stylesCard.cardtitle}>{item.name}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    if(selectedId === 2){
      console.log("back")
    }else if (selectedId === 1){
      console.log("front")
    }
    return (
      <ModuleStyle
        item={item}
        onPress={() => setSelectedId(item.id, navigation.navigate('Categorie'))}
        // backgroundColor={backgroundColor}
      />
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={modules}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}
const stylesCard = StyleSheet.create({
  cardContent: {
       flex: 1,
       // padding: 24,
       backgroundColor: '#eaeaea',
       marginHorizontal : 18,
       marginVertical : 10,
       marginBottom : 50,
   },
   cardtitle : {
       // marginTop: 16,
   paddingVertical: 8,
   borderWidth: 4,
   borderColor: '#20232a',
   borderRadius: 6,
   backgroundColor: '#61dafb',
   color: '#20232a',
   textAlign: 'center',
   fontSize: 30,
   fontWeight: 'bold',
   },
})
export default Module;