import {React, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, SafeAreaView,StyleSheet} from 'react-native';

function ShowLessonExercice(){

const route = useRoute();
const {filterLessons , filterExercices} = route.params;
// console.log("exercice " + filterExercices.content);
// console.log(filterLessons.name);

if (filterLessons){
    return(
        <View>
            <Text>text : {filterLessons.name}</Text>
            <Text>content : {filterLessons.content}</Text>
            <Text>10</Text>
        </View>
        )
}

if (filterExercices){
    return(
        <View>
            <Text>text : {filterExercices.name}</Text>
            <Text>content : {filterExercices.content}</Text>
            <Text>23</Text>
        </View>
        )
}

}
export default ShowLessonExercice