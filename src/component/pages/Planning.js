import * as React from 'react';
import {Calendar} from 'react-native-calendars';
import { Text, View, Button } from 'react-native';

const Plannig = (props) => {
    // const navigation = useNavigation();

    const marked = {
        '2023-01-10': { marked: true },
        '2023-01-13': { marked: true },
        '2023-01-25': { marked: true },
        '2023-01-23': { marked: true },
    };

    return (
      <View>
        <Calendar 
            disableAllTouchEventsForDisabledDays={true}
            markedDates={marked}
            {...props}
        />
      </View>
    );

}

export default Plannig;