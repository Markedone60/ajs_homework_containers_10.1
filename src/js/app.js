import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const result = read()
      .then((data) => json(data))
      .then((data) => JSON.parse(data)).catch((error) => error);
    return result;
  }
}

GameSavingLoader.load().then((saving) => console.log(saving));
