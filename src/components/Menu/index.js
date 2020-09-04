import React from 'react';
import { View, Text, AppRegistry, ScrollView, TouchableOpacity, Animated } from 'react-native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Menu({ translateY }) {
    return (
        <Animated.ScrollView
            style={[
                styles.container,
                {
                    opacity: translateY.interpolate({
                        inputRange: [0, 150],
                        outputRange: [0, 1],
                    }),
                }
            ]}
        >
            <View style={styles.code}>
                <QRCode
                    value="https://instagram.com/7keyframesproducoes/"
                    size={80}
                    bgColor="#fff"
                    fgColor="#8B10AE"
                />
            </View>

            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <Text style={styles.navText}>Me ajuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <Text style={styles.navText}>Meu perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="credir-card" size={20} color="#fff" />
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <Text style={styles.navText}>Configurações do app</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.signOutButton}>
                <Text style={styles.signOutButtonText}>Sair do app</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );
}