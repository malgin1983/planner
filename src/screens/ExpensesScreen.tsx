import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color } from '../common/colors';
import DateComponent from '../components/DateComponent/DateComponent';

const ExpensesScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                <DateComponent />
                <Text>{'Bottom'}</Text>
            </View>
        </View>
    );
};

export default ExpensesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainBackground,
        padding: 8,
    },
});
