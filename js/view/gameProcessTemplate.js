export const gameProcessTemplate = (cars) => {
  return `
  <section class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
      ${carNameTemplate(cars)}
    </div>
  </section>`;
};

const carNameTemplate = (cars) => {
  return cars
    .map((car) => {
      return `<div class="mr-2 car">
      <div data-id="${car.name}" class="car-player">${car.name}</div>
    </div>`;
    })
    .join("");
};

export const forwardIconTemplate = `<div class="forward-icon mt-2">⬇️️</div>`;

export const spinnerIconTemplate = `<div id="spinnerIcon" class="d-flex justify-center mt-3">
  <div class="relative spinner-container">
    <span class="material spinner"></span>
  </div>
</div>`;
