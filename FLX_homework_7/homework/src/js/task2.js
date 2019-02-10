let game = confirm('Do you want to play a game');
let games = 0;

while (game) {
  let range = 6,
    totPrize = 0,
    maxPossiblePrize = 10,
    currentPossiblePrize = 10,
    attemptsUsed = 0,
    attemptsLeft = 3,
    nextRage = true,
    luckyNumber = Math.floor(Math.random() * range);
  while (attemptsUsed < 3 && nextRage) {
		let userNumber = prompt(`Enter a number from 0 to ${range - 1}
		Attempts left: ${attemptsLeft}\nTotal prize: ${totPrize}$
		Possible prize on current attempt: ${currentPossiblePrize}$`);

    if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === luckyNumber) {
      totPrize += currentPossiblePrize;
      attemptsUsed = 0;
      attemptsLeft = 3;
      range = range * 2 - 1;
      maxPossiblePrize *= 3;
      currentPossiblePrize = maxPossiblePrize;
      luckyNumber = Math.floor(Math.random() * range);
      nextRage = confirm(`Congratulation! Your prize is: ${totPrize }  Do you want to continue?`);
    } else {
      attemptsLeft--;
      attemptsUsed++;
      currentPossiblePrize = Math.floor(maxPossiblePrize / (attemptsUsed * 2));
    }
  }

  alert(`Thank you for a game. Your prize is: ${totPrize}`);
  game = confirm('Do you want to try again?');
  games++;
}
if (!games) {
  alert('You did not become a millionaire but can');
}