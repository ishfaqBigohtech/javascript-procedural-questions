// Need to design in a way  where Commisioner class can arrest MP, Ministers and PM when their expense exceeds their spending limit:

import Minister from "./Minister";
import MP from "./MP";
import PM from "./PM";

class Commisioner {
  constructor() {}

  arrestOnIncreasingExpenses() {
    if (MP.totalExpensesConsumed() > MP.allowedExpenses) {
      console.log("MP: ", false);
    }

    if (PM.totalExpensesConsumed() > PM.allowedExpenses) {
      console.log("PM: ", false);
    }

    if (Minister.totalExpensesConsumed() > Minister.allowedExpenses) {
      console.log("Minister: ", false);
    }
  }

  canArrest() {
    if (MP.totalExpensesConsumed() > MP.allowedExpenses) {
      console.log("MP: yes");
    }

    if (Minister.totalExpensesConsumed() > PM.allowedExpenses) {
      console.log("Minister: Asking persmission to PM");
    }
  }
}

export default new Commisioner();
