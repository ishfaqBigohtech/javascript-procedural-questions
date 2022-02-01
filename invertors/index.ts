// suppose you are making a program for a very famous IoT Inverter company,
// company have multiple inverters with multiple business logic,
// use cases: company have PCU, GTI, Zelio, Regalia, iCruze Inverters,
// All Inverters have Power rating which is determined by ( Current * Operating Voltage )
// Only PCU, GTI and Regalia are solar Inverters other are not (solar inverters get charge by solar panels and solar energy),
// Solar Inverters have Solar Panels also
// Solar Inverters further have two option one Battery version that whatever energy is produced will be stored in battery other will not store any energy,
// so PCU comes with battery but GTI have no battery,
// Solar Inverter also have GRID On , system where you can sell your extra energy back, GTI is GRID On where as this feature is not available in PCU,
// Non Solar Inverters are Simple Home Inverters Which have a Battery,

import GTI from "./src/GTI";
import ICruze from "./src/iCruze";
import PCU from "./src/PCU";
import Regalia from "./src/Regalia";
import Zelio from "./src/Zelio";

class App {
  constructor() {
    this.inverterProperty();
  }

  checkPowerRating(product: string, current: any, voltage: any) {
    return `${product} has current: ${current * voltage}`;
  }

  inverterProperty() {
    let product = {
      gti: GTI.checkInverter(),
      icruze: ICruze.checkInverter(),
      pcu: PCU.checkInverter(),
      regalia: Regalia.checkInverter(),
      zelio: Zelio.checkInverter(),
    };

    console.log(product);
  }
}

const result = new App();
let powerRating = result.checkPowerRating("Zelio", 10, 30);
console.log(powerRating);
console.log(result);
