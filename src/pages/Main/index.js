import React from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';
import Icon from 'react-native-vector-icons/MaterialIcons'


import styles from './styles';

export default function Main() {
  //guardar a informação de quantos pixels foram arrastados pelo usuário
  let offset = 0;

  //Atualizar estado da posição y do card toda hora
  //diferente do useState, ele é mais otimizado
  const translateY = new Animated.Value(0);

  //captar a posição que o usuário está arrastando o card
  const animatedEvent = new Animated.event(
    [
      {
        //contém informação da mudança de posição
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    //usar driver nativo para renderizar a animação
    { useNativeDriver: true },
  );

  //Realizar animações quando o usuário arrastar o container
  function onHandlerStateChange(event) {
    //verificar se o estato da animação mudou e verificar se o usuário terminou a animação
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      //atualizar o offset de acordo com a quantidade de pixels arrastada pelo usuário
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      //animar o conteinar caso ele passe dos 100px
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        //função que vai executar ao final da animação
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.card,
              {
                transform: [{
                  translateY: translateY.interpolate({
                    inputRange: [-200, 0, 360],
                    outputRange: [-50, 0, 360],
                    extrapolate: 'clamp',
                  }),
                }]
              },
            ]}
          >
            <View style={styles.cardHeader}>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo dispoível</Text>
              <Text style={styles.description}>R$ 56,90</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.annotation}>Tranferência de R$40,00 recebida de Daniel Gustavo Favero hoje às 10:23h</Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  );
}

