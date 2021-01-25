import * as React from 'react';
import { Modal, StyleSheet, Text } from 'react-native';
import { color } from '../../common/colors';

interface IBottomPopup {
    ref: any;
}

const BottomPopup: React.FC<IBottomPopup> = (props): JSX.Element => {
    const [visible, setVisible] = React.useState(true);

    const closeModal = () => {
        setVisible(false);
    };

    const showModal = () => {
        setVisible(true);
    };

    return (
        <Modal animationType={'fade'} transparent={true} visible={visible} onRequestClose={closeModal}>
            <Text style={styles.container}>Modal</Text>
        </Modal>
    );
};

export default BottomPopup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: color.mainBackground,
    },
});
