export const store = {
  cars: [],
  raceTime: null,
};

export const addCars = (carNames) => {
  carNames.forEach((carName) => {
    const carTemplate = { name: carName, point: 0 };
    store.cars.push(carTemplate);
  });
};

export const resetStore = () => {
  store.cars = [];
  store.raceTime = null;
};
