import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { color } from '../common/colors';
import { MONTH_MOCK_DATA, YEAR_MOCK_DATA } from '../common/constants';
import DatePicker from '../components/DatePickerMonthOrYear/DatePickerMonthOrYear';

const ExpensesScreen = (): JSX.Element => {
    moment.locale('ru');
    const monthBase = moment().format('MMMM');
    const yearBase = moment().format('YYYY');

    const [month, setMonth] = useState(monthBase);
    const [year, setYear] = useState(yearBase);

    const [visibleHeaderLogo, setVisibleHeaderLogo] = useState(true);
    const [visiblePickerMonth, setVisiblePickerMonth] = useState(false);
    const [visiblePickerYear, setVisiblePickerYear] = useState(false);

    const switchVisibleDateMonth = () => {
        setVisibleHeaderLogo(!visibleHeaderLogo);
        setVisiblePickerMonth(!visiblePickerMonth);
    };
    const switchVisibleDateYear = () => {
        setVisibleHeaderLogo(!visibleHeaderLogo);
        setVisiblePickerYear(!visiblePickerYear);
    };

    const handleChangePickerMonth = (monthOrYear: string): void => {
        setMonth(monthOrYear);
        switchVisibleDateMonth();
    };
    const handleChangePickerYear = (monthOrYear: string): void => {
        setYear(monthOrYear);
        switchVisibleDateYear();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.containerTextAndLogo}>
                    {visibleHeaderLogo && (
                        <View style={styles.containerLogo}>
                            <Text>{''}</Text>
                            <Text style={styles.headerLogo} onPress={switchVisibleDateMonth}>
                                {month}
                            </Text>
                            <Text style={styles.headerLogo} onPress={switchVisibleDateYear}>
                                {year}
                            </Text>
                        </View>
                    )}
                    {visiblePickerMonth && (
                        <View style={styles.datePicker}>
                            <DatePicker handleChangePicker={handleChangePickerMonth} dateForPicker={MONTH_MOCK_DATA} />
                        </View>
                    )}
                    {visiblePickerYear && (
                        <View style={styles.datePicker}>
                            <DatePicker handleChangePicker={handleChangePickerYear} dateForPicker={YEAR_MOCK_DATA} />
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

export default ExpensesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: color.mainBackground,
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: 60,
        backgroundColor: color.mainBackground,
        borderBottomColor: color.mainDarkGrey,
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    containerTextAndLogo: {
        width: '100%',
    },
    containerLogo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    datePicker: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLogo: {
        fontSize: 20,
    },
});
