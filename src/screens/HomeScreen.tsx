import * as React from 'react';
import { View } from 'react-native';
import Main from '../Main/Main';

export default function HomeScreen(): JSX.Element {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Main />
        </View>
    );
}
