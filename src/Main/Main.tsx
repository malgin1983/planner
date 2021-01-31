import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from '../TextComponent/TextComponent';

const Main = () => {
    return (
        <View style={styles.main}>
            <TextComponent text={'Counter'} />
        </View>
    );
};

const styles = StyleSheet.create({
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
