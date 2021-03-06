// import MP from "./src/mp";

import Benefits from "./Benefits";
import Driver from "./Driver";

// getDriver - returns the driver assigned for their vehicle (default car).
// exceedsSpendingLimit - returns true or false if Mps exceeds to their spending limit.
// Note: PM spending limit : 1 crore, Ministers: 10 lakhs, MP: 1 lakh.
// Need to design in a way  where Commisioner class can arrest MP, Ministers and PM when their expense exceeds their spending limit:
// canArrest - can arrest one or many MP.
//            Note: If PM  cant arrest.
//                  If minister can arrest with PM permission
//                  if mps they can be arrested without anyones permission.
// In Short, If the MP is not PM then he can be arrested by commisoner , If he is minister then can be arrested with PMs permisison.

class Minister {
  allowedExpenses: number = 10000000;
  constructor() {}

  assignedDriver() {
    return Driver.assignDriver().roadDriver.name;
  }

  benefits() {
    let result = Benefits.getAllBenefits().minister;
  }

  totalExpensesConsumed() {
    return 1000000;
  }
}

export default new Minister();
