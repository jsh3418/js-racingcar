export const gameProcessTemplate = (players) => {
  return `
  <section class="d-flex justify-center mt-5">
    <div class="mt-4 d-flex">
      ${carPlayerTemplate(players)}
    </div>
  </section>`;
};

const carPlayerTemplate = (players) => {
  return players
    .map((player) => {
      return `<div class="mr-2 car">
      <div data-id="${player.name}" class="car-player">${player.name}</div>
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
