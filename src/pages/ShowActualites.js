import {React} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

function ShowActualite(){

const route = useRoute();
const {actualites} = route.params; // recuperation des données de l'actualité choisit 

// affichage de l'actualité choisit
    return(
        <ScrollView>
            <View style={style.nameContainer}>
                <Text style={style.textName}>{actualites.title}</Text>
            </View>
            <View style={style.contentContainer}>
                <Text style={style.textDescription}>Article : </Text>
                <Text style={style.textContent}>{actualites.content}</Text>
            </View>
            <Text style={{textAlign:'right', marginRight:20, fontWeight : 'bold'}}>Auteur(e) {actualites.author}</Text>
            <Text style={{textAlign:'right', marginRight:20, fontWeight : 'bold'}}>Publiée le {actualites.publication_date}</Text>
        </ScrollView>
        )
}
const style = StyleSheet.create({
    nameContainer:{
        flex: 1,
        margin : 15,
        alignItems: 'center', // centre horizontalement
        justifyContent: 'center', // centre verticalement 
    },
    textName:{
        width : '80%',
        borderRadius : 6,
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        padding : 5,
        marginTop : 20,
        backgroundColor: '#194766',
        color :'white',

    },
    contentContainer:{
        padding: 10,
        margin : 20,
    },
    textDescription:{
        fontWeight : 'bold',
        fontSize : 15,
        marginTop : 15,
        marginBottom : 10,
        lineHeight : 24,
    },
    textContent:{
        textAlign : "justify",
    },


    
})
export default ShowActualite