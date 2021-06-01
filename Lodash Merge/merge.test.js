const { mergeJSON } = require("./merge");

const user1 = {
  name: "Vedant",
  age: 29,
  links: {
    blog: "https://www.vedantbhatt.com",
    facebook: "https://facebook.com/vedantb",
    instagram: "https://instagram.com/vedantbhatt"
  },
  interests: ["gaming", "photography"]
};

const user2 = {
  name: "Vedant1",
  age: 28,
  links: {
    twitter: "https://twitter.com/vedantb",
    instagram: "https://instagram.com/vedantb"
  },
  interests: ["technology", "coffee"]
};

const user3 = {
  name: "Vedant2",
  age: 30,
  links: {
    twitch: "https://twitch.tv/byte_cookie"
  },
  interests: ["technology", "travel", "languages"]
};

const user = mergeJSON(user1, user2, user3);
console.log(user);
