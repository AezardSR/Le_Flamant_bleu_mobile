import {React} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

function ShowJobsOffers(){


const route = useRoute(); 
const {jobs} = route.params; // recuperation des données de l'offre choisi

// retourne les données dans une scrollView
    return(
        <ScrollView>
            <View style={style.nameContainer}>
            <Text style={style.textName}>{jobs.name}</Text>
            </View>
            <View style={style.contentContainer}>
                <Text style={style.description}>Description du poste : </Text>
                <Text style={style.textContent}>{jobs.description}</Text>
            </View>
            <Text style={{textAlign:'right', marginRight:20, fontWeight:'bold'}}>Publiée le {jobs.dateOffers}</Text>
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
        width : '80%',
        padding: 10,
        margin : 20,
    },
    textContent:{
        textAlign : "justify",
    },
    description:{
        marginBottom:15,
        fontWeight: 'bold'
    }



    
})
export default ShowJobsOffers;