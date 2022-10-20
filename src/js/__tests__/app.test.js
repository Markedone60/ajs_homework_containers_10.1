import GameSavingLoader from '../app';
import GameSaving from '../gamesaving' 

const char = new GameSaving();

test('testing game saver functionality', (done) => {
  const value = GameSavingLoader.load().then((saving) => saving);

  value.then((result) => {
    expect(result).toEqual(char);
    done();
  });
});