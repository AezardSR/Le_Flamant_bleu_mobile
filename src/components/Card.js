import { StyleSheet } from 'react-native';

const stylesCard = StyleSheet.create({
   cardContainer: {
    flex: 1,
    margin : 15,
    alignItems: 'center', // centre horizontalement
    justifyContent: 'center', // centre verticalement 
    },
    card: {
        height: 100,
        width: '100%',
        margin : 10,
        backgroundColor: '#194766',
        borderRadius : 6,
        alignItems: 'center', // centre horizontalement
        justifyContent: 'center', // centre verticalement
        
      },
    cardtitle : {
        fontSize: 30,
        fontWeight: '600',
        color: "white",
    },
    listTitle:{
      textAlign : 'center',
      fontWeight : 'bold',
      fontSize : 25,
      marginTop : 20,
    },
    titleNodata :{
      textAlign: 'center',
      fontSize: 18,
      marginTop : 20,
    }
})


export default stylesCard;

