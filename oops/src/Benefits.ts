import { Constituency } from "./constituency";

class Benefits extends Constituency {
  constructor() {
    super();
  }

  getAllBenefits() {
    return {
      PM: {
        name: "PMName",
        designation: "PM",
        specialPermissions: ["arrest_minister", "arrest_MP"],
        specialBenefits: ["aircraft", "car"],
      },
      MP: {
        name: "MPName",
        constituencyName: this.constituencyDetails().name,
        designation: "MP",
        specialBenefits: ["car"],
      },
      minister: {
        name: "MinisterName",
        designation: "Minister",
        specialBenefits: ["car"],
      },
    };
  }
}

export default new Benefits();
