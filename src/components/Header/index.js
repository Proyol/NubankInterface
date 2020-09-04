import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logo}/>
                <Text style={styles.title}>Daniel</Text>
            </View>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </View>
    );
}