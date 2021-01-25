import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { changeMonthOrYear } from '../../common/utils';

interface IHeaderPicker {
    handleChangePicker: (monthOrYear: string) => void;
    dateForPicker: { id: number; label: string; value: string }[];
}

const DatePicker: React.FC<IHeaderPicker> = (props): JSX.Element => {
    const { handleChangePicker, dateForPicker } = props;
    const [selectedValue, setSelectedValue] = useState('Январь');

    const handleChange = (itemValue: React.ReactText) => {
        setSelectedValue(String(itemValue));
        handleChangePicker(changeMonthOrYear(String(itemValue)));
    };

    return (
        <View>
            <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={handleChange}>
                {dateForPicker?.length > 0 &&
                    dateForPicker.map((item) => {
                        return <Picker.Item key={item.id} label={item.label} value={item.value} />;
                    })}
            </Picker>
        </View>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    picker: {
        width: 150,
        height: 20,
    },
});
