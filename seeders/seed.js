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
        name: "Goats",
        description: "Harley Farms Goat Dairy",
        location: [{ latitude: 37.25672, longitude: -122.37105 }],
        date: "2021-2-25",
        timestamps: true,
    },
    {
        name: "Pizza",
        description: "Pizzeria Delfina",
        location: [{ latitude: 37.78905, longitude: -122.43444 }],
        date: "2021-11-10",
    },
    {
        name: "Hikes",
        description: "Angel Island",
        location: [{ latitude: 37.85858, longitude: -122.43071 }],
        date: "2021-4-8",
        timestamps: true,
    },
    {
        name: "Ferris Wheel",
        description: "Golden Gate Park Ferris Wheel",
        location: [{ latitude: 37.77169, longitude: -122.46661 }],
        date: "2021-7-18",
        timestamps: true,
    },
    {
        name: "Dance Party",
        description: "Flash Mob Dance Party",
        location: [{ latitude: 37.76869, longitude: -122.47527 }],
        date: "2021-8-15",
        timestamps: true,
    },
    {
        name: "Big Wheel Race",
        description: "Bring your own Big Wheel Race",
        location: [{ latitude: 37.75905, longitude: -122.40393 }],
        date: "2021-4-4",
        timestamps: true,
    },
    {
        name: "Beers in the Sun",
        description: "Dolores Park",
        location: [{ latitude: 37.7602, longitude: -122.42756 }],
        date: "2021-9-15",
        timestamps: true,
    },
    {
        name: "Movie Sing a Long",
        description: "Disney Movie Sing a Long at the Castro Theater",
        location: [{ latitude: 37.76219, longitude: -122.43473 }],
        date: "2021-6-5",
        timestamps: true,
    },
    {
        name: "Zoo",
        description: "Oakland Zoo",
        location: [{ latitude: 37.75377, longitude: -122.14199 }],
        date: "2021-11-28",
        timestamps: true,
    },
    {
        name: "Hike up a Mountain",
        description: "Hike up Mt Tam, then realax on the beach",
        location: [{ latitude: 37.92385, longitude: -122.59759 }],
        date: "2021-5-15",
        timestamps: true,
    },
    {
        name: "Penny Candy",
        description: "They acutally sell penny candy here!",
        location: [{ latitude: 39.27935, longitude: -121.66104 }],
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
