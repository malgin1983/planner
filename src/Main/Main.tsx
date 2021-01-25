import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TextComponent from '../TextComponent/TextComponent';

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <TextComponent text={'Counter'} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    main: {
        backgroundColor: 'white',
        height: 200,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
});

export default Main;
