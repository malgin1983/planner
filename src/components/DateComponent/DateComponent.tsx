import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { color } from '../../common/colors';
import { MONTH_MOCK_DATA, YEAR_MOCK_DATA } from '../../common/constants';
import DatePicker from '../DatePickerMonthOrYear/DatePickerMonthOrYear';

const DateComponent = (): JSX.Element => {
    moment.locale('ru');
    const monthBase = moment().format('MMMM');
    const yearBase = moment().format('YYYY');

    const [month, setMonth] = useState(monthBase);
    const [year, setYear] = useState(yearBase);

    const [visibleHeaderLogo, setVisibleHeaderLogo] = useState(true);
    const [visiblePickerMonth, setVisiblePickerMonth] = useState(false);
    const [visiblePickerYear, setVisiblePickerYear] = useState(false);

    const switchVisibleMonth = () => {
        setVisibleHeaderLogo(!visibleHeaderLogo);
        setVisiblePickerMonth(!visiblePickerMonth);
    };
    const switchVisibleYear = () => {
        setVisibleHeaderLogo(!visibleHeaderLogo);
        setVisiblePickerYear(!visiblePickerYear);
    };

    const handleChangePickerMonth = (monthOrYear: string): void => {
        setMonth(monthOrYear);
        switchVisibleMonth();
    };
    const handleChangePickerYear = (monthOrYear: string): void => {
        setYear(monthOrYear);
        switchVisibleYear();
    };

    return (
        <View style={styles.header}>
            <View style={styles.containerTextAndLogo}>
                {visibleHeaderLogo && (
                    <View style={styles.containerLogo}>
                        <Text>{''}</Text>
                        <Text style={styles.headerLogo} onPress={switchVisibleMonth}>
                            {month}
                        </Text>
                        <Text style={styles.headerLogo} onPress={switchVisibleYear}>
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
    );
};

export default DateComponent;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: color.mainBackground,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: 40,
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
