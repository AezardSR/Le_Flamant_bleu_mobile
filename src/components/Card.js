import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

class Card extends React.Component {
    render(){
        return(
            <TouchableOpacity>
        <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{this.props.categorie}</Text>
        </View>
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    cardContent: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
        marginHorizontal : 18,
        marginVertical : 10,
    },
    cardtitle : {
        marginTop: 16,
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
    // cardFooter : {
    //     backgroundColor : "grey",
    //     borderBottomEndRadius : 6,
    //     borderBottomStartRadius : 6,
    // }
})

export default Card;

