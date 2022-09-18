import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export interface Duo {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

class GameStore {
  games: Game[] = [];
  duos: Duo[] = [];
  discordDuoSelected: string = '';

  constructor() {
    makeObservable(this, {
      games: observable,
      duos: observable,
      discordDuoSelected: observable,
      setGames: action,
      setDuos: action,
      setDiscordDuoSelected: action,
    });
  }

  setGames = (gameList: Game[]) => {
    this.games = gameList;
  };

  setDuos = (duoList: Duo[]) => {
    this.duos = duoList;
  };

  setDiscordDuoSelected = (discordSelected: string) => {
    this.discordDuoSelected = discordSelected;
  };
}

export default createContext(new GameStore());
