import {React, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, Image} from 'react-native';

function ShowLessonExercice(){

const route = useRoute();
const {filterLessons , filterExercices} = route.params;

if (filterLessons){
    return(
        <View>
            <Text style={style.textName}>{filterLessons.name}</Text>
            <Text style={style.textDuration}>Durée du cour : {filterLessons.duration} jours</Text>
            <View style={style.contentContainer}>
                <Text style={style.textContent}>{filterLessons.content}</Text>
            </View>
        </View>
        )
}

if (filterExercices){
    return(
        <View>
            <Text style={style.textName}>{filterExercices.name}</Text>
            <View style={style.contentContainer}>
                <Text style={style.textContent}>{filterExercices.content}</Text>
            </View>
        </View>
        )
}
}
const style = StyleSheet.create({
    textName:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        marginTop : 20,
    },
    contentContainer:{
        borderWidth: 3,
        borderColor: '#28abe2',
        padding: 10,
        margin : 20,
        borderRadius : 6,
    },
    textContent:{
        textAlign : "justify",
    },
    textDuration:{
        fontWeight : 'bold',
        fontSize : 15,
        margin : 10,
        marginTop : 30,
        lineHeight : 24,
    },
    imageContainer: {

    }
    
})
export default ShowLessonExercice