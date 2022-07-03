export const store = {
  players: [],
  raceTime: null,
};

export const savePlayers = (name) => {
  const playersTemplate = { name: name, point: 0 };
  store.players.push(playersTemplate);
};

export const resetStore = () => {
  store.players = [];
  store.raceTime = null;
};
