import React from 'react';
import { View, Text, TouchableHighlight, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/Store';
import { increment, decrement } from '../redux/CountReducer/Reducer';
import { fetchUserById } from '../redux/Thunks/CountActions';

interface ITextComponent {
    text: string;
}

const TextComponent: React.FC<ITextComponent> = (props) => {
    const dispatch = useAppDispatch();
    dispatch(fetchUserById(1));
    const count = useSelector((state: RootState) => state.counter.count);
    // const fetchData = useSelector((state: RootState) => state.counter.data);
    // console.log('Data from fetch', fetchData);
    const pressPluse = () => {
        dispatch(increment());
    };
    const pressMinus = () => {
        dispatch(decrement());
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text testID={'text-component -props'}>{props.text}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text testID={'text-component'}>{`Count - ${count}`}</Text>
                </View>
                <View style={styles.btnBlock}>
                    <TouchableHighlight testID={'text-btn-minus'} style={styles.btn} onPress={pressMinus}>
                        <Text>{'minus'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight testID={'text-btn-plus'} style={styles.btn} onPress={pressPluse}>
                        <Text>{'plus'}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TextComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    btn: {
        width: 100,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
    textContainer: {
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlock: {
        flex: 1,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
