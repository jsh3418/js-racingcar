const carPlayerTemplate = (car) => {
  return car
    .map((item) => {
      return `<div class="mr-2 car">
      <div class="car-player">${item.name}</div>
    </div>`;
    })
    .join("");
};

export const gameProcesstemplate = (car) => {
  return `
  <section class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
      ${carPlayerTemplate(car)}
    </div>
  </section>`;
};

export const forwardIconTemplate = `<div class="forward-icon mt-2">⬇️️</div>`;

export const spinnerIconTemplate = `<div id="spinnerIcon" class="d-flex justify-center mt-3">
  <div class="relative spinner-container">
    <span class="material spinner"></span>
  </div>
</div>`;
