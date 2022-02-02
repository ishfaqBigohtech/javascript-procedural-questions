class Withdrawal {
  constructor() {}

  // function to count and
  countCurrency(amount: number) {
    let notes = [2000, 500, 200, 100];
    let noteCounter = Array(4).fill(0);

    for (let i = 0; i < notes.length; i++) {
      if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount - noteCounter[i] * notes[i];
      }
    }

    console.log("Currency Count ->");
    for (let i = 0; i < notes.length; i++) {
      if (noteCounter[i] != 0) {
        console.log(notes[i] + " : " + noteCounter[i]);
      }
    }
  }
}
export default new Withdrawal();
