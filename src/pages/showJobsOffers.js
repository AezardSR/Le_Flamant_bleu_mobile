import {React, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, FlatList, TouchableOpacity, SafeAreaView,StyleSheet, ScrollView} from 'react-native';

function ShowJobsOffers(){

const route = useRoute();
const {jobs} = route.params;

    return(
        <ScrollView>
            <Text style={style.textName}>{jobs.name}</Text>

            <View style={style.contentContainer}>
                <Text style={style.textContent}>{jobs.description}</Text>
            </View>
            <Text style={{textAlign:'right', marginRight:20}}>Publiée le {jobs.dateOffers}</Text>
        </ScrollView>
        )
}
const style = StyleSheet.create({
    textName:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        marginTop : 20,
        width : '90%'
    },
    contentContainer:{
        padding: 10,
        margin : 20,
    },
    textContent:{
        textAlign : "justify",
    },


    
})
export default ShowJobsOffers;