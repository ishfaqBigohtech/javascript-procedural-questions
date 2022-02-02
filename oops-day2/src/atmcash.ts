// As the described task is:
// You have to create a program for ATM Which would have certain defined denominations of notes : 100 ,200, 500, and 2000 INR.
// Now you have to design your ATM in such a way that at any time ATM can be top-up with any required domination like I can add 41000 as (2000 x 20) + (500 x 2) notes
// Your ATM should have a function to withdraw cash , input can be any amount:
// Use cases for withdraw as below:
// 1: if amount is not present show error insufficient balance
// 2: if amount is not in the factor of available denominations show error to ask for multiple of available denomination
// 3: first largest denomination should be used than smaller : like if I opt for 2300 rs, amount dispatched should be (2000 x 1 ) + (200 x 1) + (100 x 1)
// 3.b: if any denomination is not there like suppose you don’t have 2000 notes left in ATM , then, amount dispatched should be (500 x 4) +  (200 x 1) + (100 x 1)
// Next step: it can be done by Modi Ji, that older denomination is not valid in case of demonetization like 2000 Notes are banned and new 5000 notes are legal , so you code should be like you don’t need to change much of it,
// Try to achieve OOPS , and SOLID principles as much as you can,
// Also, we will add new use cases to see whether your system can adapt to those changes. If Not, then your design is bad. (SOLID,TRY,YAGNI,KISS)

import currency from "./currency";

class AtmCash {
  totalAvailableCash: number = 0;

  constructor() {
    this.availableCash();
  }

  hundredCurrency(totalHundreds: number) {
    return (currency.denominations().hundred = totalHundreds);
  }
  twohundredCurrency(totaltwoHundred: number) {
    return (currency.denominations().twohundred = totaltwoHundred);
  }
  fiveHundredCurrecy(totalFiveHundred: number) {
    return (currency.denominations().fivehundred = totalFiveHundred);
  }
  twoThousandCurrency(totalTwothousands: number) {
    return (currency.denominations().twoThousand = totalTwothousands);
  }

  totalHundreds() {
    return this.hundredCurrency(1);
  }

  totalTwoHundred() {
    return this.twohundredCurrency(1);
  }

  totalFiveHundred() {
    return this.fiveHundredCurrecy(0);
  }

  totalTwoThousands() {
    return this.twoThousandCurrency(4);
  }

  availableCash() {
    this.totalAvailableCash =
      this.totalHundreds() * 100 +
      this.totalTwoHundred() * 200 +
      this.totalFiveHundred() * 500 +
      this.totalTwoThousands() * 2000;
    console.log("total cash in ATM: ", this.totalAvailableCash);

    return this.totalAvailableCash;
  }

  withdrawAmount(amount: number) {
    let pendingAmount: number = amount;
    let counter: number = 0;

    if (this.totalAvailableCash < amount) return `Insufficient balance!`;

    if (
      this.totalAvailableCash > currency.denominations().twoThousand &&
      amount >= currency.denominations().twoThousand &&
      pendingAmount >= currency.denominations().fivehundred &&
      amount >= this.totalTwoThousands()
    ) {
      let remainder = amount % currency.denominations().twoThousand;
      pendingAmount = remainder;
      counter++;
      console.log("2000 count: ", counter);
    }

    if (
      this.totalAvailableCash > currency.denominations().fivehundred &&
      amount >= currency.denominations().fivehundred &&
      pendingAmount >= currency.denominations().fivehundred &&
      amount >= this.totalFiveHundred()
    ) {
      let remainder = amount % currency.denominations().fivehundred;
      pendingAmount = remainder;
      console.log("remaining 500: ", pendingAmount);
    }

    if (
      this.totalAvailableCash > currency.denominations().twohundred &&
      amount >= currency.denominations().twohundred &&
      pendingAmount >= currency.denominations().twohundred &&
      amount >= this.totalTwoHundred()
    ) {
      let remainder = amount % currency.denominations().twohundred;
      pendingAmount = remainder;
      console.log("All 200 count: ", remainder);

      if (remainder < 100 && remainder !== 0)
        return `The ${amount} must be in multiple of 100s!`;
    }

    if (
      this.totalAvailableCash > currency.denominations().hundred &&
      amount >= currency.denominations().hundred &&
      pendingAmount >= currency.denominations().hundred &&
      amount >= this.totalHundreds()
    ) {
      let remainder = amount % currency.denominations().hundred;
      pendingAmount = remainder;
      console.log("100 count: ", counter++);

      if (remainder < 100 && remainder !== 0)
        return `The ${amount} must be in multiple of 100s!`;
    }
    if (
      amount < currency.denominations().twoThousand &&
      amount < currency.denominations().fivehundred &&
      amount < currency.denominations().twohundred &&
      amount < currency.denominations().hundred
    )
      return `Amount ${amount} entered is less, please add multiple of 100!`;
    // if (
    //   this.totalHundreds() < 1 ||
    //   this.totalTwoHundred() < 1 ||
    //   this.totalFiveHundred() < 1 ||
    //   this.totalTwoThousands() < 1
    // ) {
    //   return `Please, enter multiples of amount!`;
    // }

    this.updateAvailableCash(amount);
    return `${amount} withdrawal, success!`;
  }

  updateAvailableCash(withdrawalAmount: number) {
    this.totalAvailableCash = this.totalAvailableCash - withdrawalAmount;
    console.log("Available cash after withdrawal!", this.totalAvailableCash);
  }
}

export default new AtmCash();
