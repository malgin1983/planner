import Icon from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { color } from '../../common/colors';

interface ITableInfoIcon {
    title: string;
}

const TableInfoIcon: React.FC<ITableInfoIcon> = (props) => (
    <View style={styles.container}>
        <Text>{'23.10.2020'}</Text>
        <Text>{props.title}</Text>
        <Text>{'23000,0'}</Text>
        <Text>{'Rub'}</Text>
        <View>{}</View>
        <Icon name={'edit'} size={20} color={color.mainDarkGrey} />
        <Icon name={'delete'} size={20} color={color.mainDarkGrey} />
    </View>
);

export default TableInfoIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        backgroundColor: color.mainBackground,
        borderBottomWidth: 1,
        borderBottomColor: color.mainDarkGrey,
    },
});
