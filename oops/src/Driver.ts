// getDriver - returns the driver assigned for their vehicle (default car).

// PM enjoys special benefits such as Aircraft (along with car) and its designated driver.

class Driver {
  constructor() {}

  assignDriver() {
    return {
      roadDriver: {
        name: "John Doe",
        age: 45,
        licence: "DLsjs123245643",
      },
      pilot: {
        name: "Marry Doe",
        age: 42,
        licence: "XYZABCDE",
      },
    };
  }
}
export default new Driver();
