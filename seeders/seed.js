let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/project-3", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

let eventSeed = [
  {
    title: "Goats",
    description: "Harley Farms Goat Dairy",
    category: "zoo",
    location: [{ latitude: 37.25672, longitude: -122.37105 }],
    date: "2021-2-25",
    private: false,
    timestamps: true,
  },
  {
    title: "Pizza",
    special: "New Menu!",
    description: "Pizzeria Delfina",

    category: "food",
    location: [{ latitude: 37.78905, longitude: -122.43444 }],
    private: false,
    date: "2021-11-10",
  },
  {
    title: "Hikes",
    description: "Angel Island",
    category: "outdoor",
    location: [{ latitude: 37.85858, longitude: -122.43071 }],
    private: false,
    date: "2021-4-8",
    timestamps: true,
  },
  {
    title: "Ferris Wheel",
    special: "New games and food picks",
    description: "Golden Gate Park Ferris Wheel",
    category: "theme-park",
    location: [{ latitude: 37.77169, longitude: -122.46661 }],
    private: false,
    date: "2021-7-18",
    timestamps: true,
  },
  {
    title: "Dance Party",
    special: "Special guest will be announced soon",
    description: "Flash Mob Dance Party",
    category: "disco",
    location: [{ latitude: 37.76869, longitude: -122.47527 }],
    private: false,
    date: "2021-8-15",
    timestamps: true,
  },
  {
    title: "Big Wheel Race",
    description: "Bring your own Big Wheel Race",
    category: "car",
    location: [{ latitude: 37.75905, longitude: -122.40393 }],
    private: false,
    date: "2021-4-4",
    timestamps: true,
  },
  {
    title: "Beers in the Sun",
    description: "Dolores Park",
    category: "liquor",
    location: [{ latitude: 37.7602, longitude: -122.42756 }],
    private: false,
    date: "2021-9-15",
    timestamps: true,
  },
  {
    title: "Movie Sing a Long",
    description: "Disney Movie Sing a Long at the Castro Theater",
    category: "sing",
    location: [{ latitude: 37.76219, longitude: -122.43473 }],
    private: false,
    date: "2021-6-5",
    timestamps: true,
  },
  {
    title: "Zoo",
    description: "Oakland Zoo",
    category: "zoo",
    location: [{ latitude: 37.75377, longitude: -122.14199 }],
    private: false,
    date: "2021-11-28",
    timestamps: true,
  },
  {
    title: "Hike up a Mountain",
    description: "Hike up Mt Tam, then realax on the beach",
    category: "outdoor",
    location: [{ latitude: 37.92385, longitude: -122.59759 }],
    private: false,
    date: "2021-5-15",
    timestamps: true,
  },
  {
    title: "Penny Candy",
    description: "They acutally sell penny candy here!",
    category: "food",
    location: [{ latitude: 39.27935, longitude: -121.66104 }],
    private: false,
    date: "2021-3-18",
    timestamps: true,
  },
];

db.Saved.deleteMany({})
  .then(() => db.Saved.collection.insertMany(eventSeed))
  .then((data) => {
    console.log(data.result.n + " events inserted into MongoDatabase!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
