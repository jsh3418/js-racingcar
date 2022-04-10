import { CarModel, RacingCarGameModel } from '../models/index.js';
import {
  TryCountFormView,
  RacingCarGameView,
  RacingCarGameProgressSectionView,
  RacingCarGameEndSectionView,
} from '../views/index.js';

import { carNameValidator, tryCountValidator } from '../validators/index.js';
import { $ } from '../utils/dom.js';
import { pickNumberInRange } from '../utils/number.js';
import { DOM, GAME } from '../constants.js';

class RacingCarGame {
  constructor(target) {
    this.$target = target;
    this.racingCarGameModel = new RacingCarGameModel();
    this.racingCarGameView = new RacingCarGameView(target);
    this.initializeGame();
    this.mounted();
  }

  initializeGame() {
    this.racingCarGameView.render();
    this.racingCarGameView.focusCarNamesInput();
    this.setEvent();
  }

  mounted() {
    this.tryCountFormView = new TryCountFormView($(`#${DOM.TRY_COUNT_FORM_ID}`));
    this.racingCarGameProgressSectionView = new RacingCarGameProgressSectionView(
      $(`#${DOM.GAME_PROCESS_BOARD_ID}`),
    );
    this.racingCarGameEndView = new RacingCarGameEndSectionView($(`#${DOM.GAME_END_SECTION_ID}`));
  }

  setEvent() {
    $(`#${DOM.RACING_CAR_GAME_APP_ID}`).addEventListener('submit', event => {
      event.preventDefault();
      this.onSubmitRacingGame(event.submitter);
    });
    $(`#${DOM.RACING_CAR_GAME_APP_ID}`).addEventListener('click', event =>
      this.onClickRacingGame(event.target),
    );
  }

  onSubmitRacingGame(submitter) {
    if (submitter === $(`#${DOM.TRY_COUNT_SUBMIT_BUTTON_ID}`)) {
      this.progressRacingFromTryCount();
      return;
    }

    if (submitter === $(`#${DOM.CAR_NAMES_SUBMIT_BUTTON_ID}`)) {
      this.generateCarFromCarNameInput();
      return;
    }
  }

  onClickRacingGame(target) {
    if (target === $(`#${DOM.GAME_RESTART_BUTTON_ID}`)) {
      this.restartGame();
      return;
    }
  }

  generateCarFromCarNameInput() {
    const carNames = this.racingCarGameView.$carNamesInput.value;

    try {
      this.validateCarNames(carNames);
    } catch (error) {
      alert(error.message);
      this.racingCarGameView.focusCarNamesInput();
      return;
    }

    this.generateCars(carNames);

    this.tryCountFormView.render();
  }

  validateCarNames(carNames) {
    carNameValidator.isEnteredCarNames(carNames);
    carNameValidator.isAllCarNamesHaveUnderFiveLetter(carNames);
  }

  generateCars(carNames) {
    const cars = carNames
      .split(GAME.CAR_NAME_SPLITTER)
      .map(carName => new CarModel(carName.trim()));
    this.racingCarGameModel.cars = cars;
  }

  progressRacingFromTryCount() {
    this.racingCarGameModel.tryCount = $(`#${DOM.TRY_COUNT_INPUT_ID}`).value;

    try {
      this.validateTryCount();
    } catch (error) {
      alert(error.message);
      this.tryCountFormView.focusTryCountInput();
      return;
    }

    this.progressRacingResult();
    this.racingCarGameProgressSectionView.renderRacingGameResultTemplate(
      this.racingCarGameModel.cars,
    );
    this.racingCarGameEndView.renderEndSection(this.racingCarGameModel.winnerCars);
  }

  validateTryCount() {
    tryCountValidator.isEnteredTryCount(this.racingCarGameModel.tryCount);
    tryCountValidator.isOverThanZero(this.racingCarGameModel.tryCount);
  }

  progressRacingResult() {
    this.racingCarGameModel.cars.forEach(car => {
      car.gameResult = Array.from({ length: this.racingCarGameModel.tryCount }).map(() =>
        pickNumberInRange(GAME.CAR_FORWARD_MIN_CONDITION, GAME.CAR_FORWARD_MAX_CONDITION) >=
        GAME.CAR_FORWARD_STANDARD
          ? GAME.ADVANCE
          : GAME.STOP,
      );
    });
  }

  restartGame() {
    this.racingCarGameEndView.reset();
    this.racingCarGameProgressSectionView.reset();
    this.tryCountFormView.reset();
    this.racingCarGameView.reset();
  }
}

export default RacingCarGame;