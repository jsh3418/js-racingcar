export const winnerTemplate = (winner) => {
  return `<section class="d-flex justify-center mt-5">
  <div>
    <h2>🏆 최종 우승자: ${winner} 🏆</h2>
    <div class="d-flex justify-center">
      <button id="resetButton" type="button" class="btn btn-cyan">다시 시작하기</button>
    </div>
  </div>
</section>`;
};

export const winnerMessage = () => {
  alert("🎇🎇🎇🎇축하합니다!🎇🎇🎇🎇");
};
