import React from 'react';
import { View, ScrollView, Text, Animated } from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ translateY }) {
    return (
        <Animated.View style={[
            styles.container,
            {
                opacity: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [1, 0.3],
                    extrapolate: 'clamp',
                }),
                transform: [{
                    translateY: translateY.interpolate({
                        inputRange: [0, 380],
                        outputRange: [0, 30],
                        extrapolate: 'clamp',
                    }),
                }]
            }
        ]}>
            <ScrollView
                contentContainerStyle={{ paddingLeft: 10, paddingRight: 20 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#fff" />
                    <Text style={styles.tabText}>Indicar amigos</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#fff" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#fff" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#fff" />
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#fff" />
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </Animated.View>
    )
}