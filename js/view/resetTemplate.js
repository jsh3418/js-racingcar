export const resetTemplate = `
      <div class="d-flex justify-center mt-5">
        <div id="user-input-component">
          <section>
            <form>
              <fieldset>
                <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
                <p>
                  5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
                  예시) EAST, WEST, SOUTH, NORTH
                </p>
                <div class="d-flex">
                  <input
                    type="text"
                    id="car-name-input"
                    class="w-100 mr-2"
                    placeholder="자동차 이름"
                  />
                  <button
                    type="submit"
                    id="car-name-submit-button"
                    class="btn btn-cyan"
                  >
                    확인
                  </button>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </div>`;
