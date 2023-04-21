import {React, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, Image} from 'react-native';

function ShowActualite(){

const route = useRoute();
const {actualites} = route.params;

    return(
        <View>
            <Text style={style.textName}>{actualites.title}</Text>

            <View style={style.contentContainer}>
                <Text style={style.textContent}>{actualites.content}</Text>
            </View>
        </View>
        )
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
export default ShowActualite