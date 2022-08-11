export const store = {
  players: [],
  raceTime: null,
};

export const addPlayers = (carNames) => {
  carNames.forEach((carName) => {
    const playerTemplate = { name: carName, point: 0 };
    store.players.push(playerTemplate);
  });
};

export const resetStore = () => {
  store.players = [];
  store.raceTime = null;
};
