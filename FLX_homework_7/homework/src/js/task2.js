let play = confirm('Do you want to play a game');
let games = 0;

while (play) {
  let range = 6,
    totalPrize = 0,
    maxPossiblePrize = 10,
    currentPossiblePrize = 10,
    attemptsUsed = 0,
    attemptsLeft = 3,
    nextRage = true,
    luckyNumber = Math.floor(Math.random() * range);
  console.log( " luckyNumber" +luckyNumber+"Range"+range);
  while (attemptsUsed < 3 && nextRage) {
		let userNumber = prompt(`Enter a number from 0 to ${range - 1}
		Attempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$
		Possible prize on current attempt: ${currentPossiblePrize}$`);

    if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === luckyNumber) {
      totalPrize += currentPossiblePrize;
      attemptsUsed = 0;
      attemptsLeft = 3;
      range = range * 2 - 1;
      maxPossiblePrize *= 3;
      currentPossiblePrize = maxPossiblePrize;
      luckyNumber = Math.floor(Math.random() * range);
      nextRage = confirm(`Congratulation! Your prize is: ${totalPrize }  Do you want to continue?`);
    } else {
      attemptsLeft--;
      attemptsUsed++;
      currentPossiblePrize = Math.floor(maxPossiblePrize / (attemptsUsed * 2));
    }
  }

  alert(`Thank you for a game. Your prize is: ${totalPrize}`);
  play = confirm('Do you want to try again?');
  games++;
}
if (!games) {
  alert('You did not become a millionaire but can');
}