// Intent: user can paint brick in his/her city wall with caption, message and dedicate to someone on Valentine's day.
// > Anyone can read content of brick.
// > Anyone can comment on it.
// > Use cases:
// > Brick: Every country has n number of cities and every city can have 1 to n number of walls.
// > 1 wall can have max of 90 bricks. 2nd wall would be only initiated once all bricks of 1st wall will be occupied.
// > A brick can be only owned by a single guy..
// > When owner visits on his/her city wall then his brick should animate.
// > Need to find out total number of walls initiated, total number of bricks initiated in specific wall.
// > Admin can edit any brick whereas user can edit only his/her brick.
// > If more than 10 bricks would be flagged then brick would be in invisible mode.
// An owner can dedicate more than one brick to express his/ her love to more than one person whereas a specific brick can be only owned by one person.
// Find out hottest guy or girl that received max number of bricks.
// Find out the guy or girl that don't get any dedication.
// You can input 10 users from command line. Whole project should be able to run through command line.

import { Comment } from "./src/Comment";
import { Brick } from "./src/Brick";
import { Wall } from "./src/Wall";
import { City } from "./src/City";
import { Country } from "./src/Country";
import { User } from "./src/user";

class App {
  constructor() {}
}
let result = new App();

let comment1 = new Comment(1, "Marry", "Stars are bright!");

let user1 = new User({
  brickId: 1,
  userId: 1221,
  userName: "John Doe",
});
let dedicatedTo = user1.dedicatedTo();

let brick1 = new Brick({
  brickId: 1,
  wallId: 1,
  paintedBy: user1,
  viewedBy: "me",
  commentedBy: comment1,
  dedicatedTo: dedicatedTo,
  hasAdminEditted: false,
});

console.log(brick1.styles);

let wall1 = new Wall({
  cityId: 1,
  wallId: 1,
  wallNumber: 1,
  bricks: brick1.styles,
});
let d = wall1.wallDetails;
console.log(d);
let city1 = new City({
  countryId: 1,
  cityId: 1,
  cityName: "Delhi",
  wall: wall1,
});

let country1 = new Country({
  countryId: 1,
  countryName: "India",
  cities: city1.cityDetails,
});

console.log(country1.getCountry());
