import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import QRCode from 'react-native-qrcode';

import styles from './styles';

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.code}>
                <QRCode
                    value="https://instagram.com/7keyframesproducoes/"
                    size={80}
                    bgColor="#fff"
                    fgColor="#8B10AE"
                />
            </View>
        </View>
    );
}