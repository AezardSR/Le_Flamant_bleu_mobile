import {React, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import { View,Text, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, TextInput, Button} from 'react-native';

const Lesson = () => {
    
    const [categories, setCategories] = useState([]);
    const [idCatModul, setIdCatModul] = useState([]);
    const route = useRoute();
    const idModule = route.params.id;
    const modules = route.params.data;


    // console.log("test " + idModule)
    // if(idModule === 1){
    //     console.log("ça marche")
    // }
console.log("toto   " + idCatModul)
    const getCategories = async () => {
        const response = await fetch("http://192.168.1.123:8000/api/categories")
        const json = await response.json();
        setCategories(json)
    };
    const getIdCatModul = async () => {
      const response = await fetch("http://192.168.1.123:8000/api/modulescategories")
      const json = await response.json();
      setIdCatModul(JSON.stringify(json))
    };
    useEffect(()=>{
        getCategories();
        getIdCatModul();
      }, [])
      const goToData = () => {
        // console.log(categories)
        console.log("ID cat Module " + idCatModul)
      };
      const renderItem = ({item}) => (
        <TouchableOpacity onPress={goToData} style={stylesCard.cardContent}>
          <Text style={stylesCard.cardtitle}>{item.categorie}</Text>
        </TouchableOpacity>
      );
  if(idModule === 2){
    return(
      <View>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
  );
  }
    return(
        <View>
          <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    );
   
// return(
//  <View>
//     {modules.map((test) => {
// return (
//     <View>
//     <Text>text :{test.id}</Text>
//     <Button title="Go to Details" onPress={goToData} />
// </View>
// );
//     })}
     
// </View>
// );
};

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
export default Lesson;