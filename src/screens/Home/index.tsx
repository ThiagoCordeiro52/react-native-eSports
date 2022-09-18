import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import gameStore, { Game } from '../../stores/gameStore';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export const Home = observer(() => {
  const { games, setGames } = useContext(gameStore);

  const navigation = useNavigation();

  function handleOpenGame({ title, id, bannerUrl }: Game) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://10.0.0.106:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <GameCard data={item} onPress={() => handleOpenGame(item)} />
            );
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
});
