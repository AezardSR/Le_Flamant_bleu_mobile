import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

class CardStyles extends React.Component {
    render(){
        return(
            <TouchableOpacity>
                <View style={stylesCard.cardContent} >
                    <Text style={stylesCard.cardTitle}>{this.props.categorie}</Text>
                </View>
        </TouchableOpacity>
        )
    }
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

export default CardStyles;

