import {React} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View ,StyleSheet, ScrollView} from 'react-native';

function ShowLessonExercice(){

const route = useRoute();
const {filterLessons , filterExercices} = route.params; // recuperation des données du cours ou l'exercice

// si un cours est choisit, affichage du cours
if (filterLessons){
    return(
        <ScrollView>
            <View style={style.nameContainer}>
                <Text style={style.textName}>{filterLessons.name}</Text>
            </View>
            <View style={style.contentContainer}>
                <Text style={style.textDuration}>Durée du cours : {filterLessons.duration} jours</Text>
                <Text style={style.textContent}>{filterLessons.content}</Text>
            </View>
        </ScrollView>
        )
}

// si un exercice est choisit, affichage de l'exercice
if (filterExercices){
    return(
        <ScrollView>
            <View style={style.nameContainer}>
            <Text style={style.textName}>{filterExercices.name}</Text>
            </View>
            <View style={style.contentContainer}>
                <Text style={style.textDuration}>Consigne</Text>
                <Text style={style.textContent}>{filterExercices.content}</Text>
            </View>
        </ScrollView>
        )
}
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
        width : '80%',
        padding: 10,
        margin : 20,
    },
    textContent:{
        textAlign : "justify",
    },
    textDuration:{
        fontWeight : 'bold',
        fontSize : 15,
        marginTop : 15,
        marginBottom : 10,
        lineHeight : 24,
    },

    
})
export default ShowLessonExercice;