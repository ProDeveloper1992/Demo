import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const SecondScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text>{'Go Back to First Screen'}</Text>
        </View>
    );
};

export default SecondScreen;
