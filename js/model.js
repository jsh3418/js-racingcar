export const store = {
  cars: [],
  raceTime: null,
};

export const addCars = (carNames) => {
  carNames.forEach((carName) => {
    const playerTemplate = { name: carName, point: 0 };
    store.cars.push(playerTemplate);
  });
};

export const resetStore = () => {
  store.cars = [];
  store.raceTime = null;
};
