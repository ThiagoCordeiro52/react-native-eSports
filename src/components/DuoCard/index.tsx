import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { GameController } from 'phosphor-react-native';

import { Duo } from '../../stores/gameStore';

import { styles } from './styles';
import { THEME } from '../../theme';

interface DuoCardPrps {
  data: Duo;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: DuoCardPrps) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name}></DuoInfo>

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      ></DuoInfo>

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd} `}
      ></DuoInfo>

      <DuoInfo
        label="Chamada de aúdio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      ></DuoInfo>

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
