class Countries {
  countryDetails: any[] = [
    {
      countries: [
        {
          countryName: "India",
          cities: [
            {
              cityName: "Delhi",
              walls: [
                {
                  maximumBricksAllowed: 99,
                  bricks: [
                    {
                      adminEdited: false,
                      isPainted: true,
                      paintedBy: "UserName",
                      seenBy: "Aanonymous",
                      comentedBy: [
                        {
                          person1: "Added comment",
                        },
                      ],
                      dedicatedTo: "name",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}
}

export default new Countries();
