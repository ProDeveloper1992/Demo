import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import styles from './style';

const FisrtScreen = (props) => {

    const { navigation } = props;

    const onGoToSecondScreen = () => {
        navigation.navigate('second-screen')
    }

    return (
        <View style={styles.container}>
            <Button title={'Go to Second Screen'} onPress={onGoToSecondScreen} />
        </View>
    );
};

export default FisrtScreen;
