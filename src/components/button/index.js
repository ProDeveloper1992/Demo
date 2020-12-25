import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({ title, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
