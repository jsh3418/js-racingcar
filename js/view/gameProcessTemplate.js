const carPlayerTemplate = (carName) => {
  return carName
    .map((item) => {
      return `<div class="mr-2">
      <div class="car-player">${item}</div>
    </div>`;
    })
    .join("");
};

export const gameProcesstemplate = (carName) => {
  return `
  <section class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
      ${carPlayerTemplate(carName)}
    </div>
  </section>`;
};
