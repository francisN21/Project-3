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
        latitude: 37.25672,
        longitude: -122.37105,
        date: "2021-2-25",
        timestamps: true,

    },
    {
        title: "Pizza",
        description: "Pizzeria Delfina",
        latitude: 37.78905,
        longitude: -122.43444,
        date: "2021-11-10",
    },
    {
        title: "Hikes",
        description: "Angel Island",
        latitude: 37.85858,
        longitude: -122.43071,
        date: "2021-4-8",
        timestamps: true,

    },
    {
        title: "Ferris Wheel",
        description: "Golden Gate Park Ferris Wheel",
        latitude: 37.77169,
        longitude: -122.46661,
        date: "2021-7-18",
        timestamps: true,
    },
    {
        title: "Dance Party",
        description: "Flash Mob Dance Party",
        latitude: 37.76869,
        longitude: -122.47527,
        date: "2021-8-15",
        timestamps: true,
    },
    {
        title: "Big Wheel Race",
        description: "Bring your own Big Wheel Race",
        latitude: 37.75905,
        longitude: -122.40393,
        date: "2021-4-4",
        timestamps: true,
    },
    {
        title: "Beers in the Sun",
        description: "Dolores Park",
        latitude: 37.76020,
        longitude: -122.42756,
        date: "2021-9-15",
        timestamps: true,

    },
    {
        title: "Movie Sing a Long",
        description: "Disney Movie Sing a Long at the Castro Theater",
        latitude: 37.76219,
        longitude: -122.43473,
        date: "2021-6-5",
        timestamps: true,
    },
    {
        title: "Zoo",
        description: "Oakland Zoo",
        latitude: 37.75377,
        longitude: -122.14199,
        date: "2021-11-28",
        timestamps: true,
    },
    {
        title: "Hike up a Mountain",
        description: "Hike up Mt Tam, then realax on the beach",
        latitude: 37.92385,
        longitude: -122.59759,
        date: "2021-5-15",
        timestamps: true,
    },
    {
        title: "Penny Candy",
        description: "They acutally sell penny candy here!",
        latitude: 39.27935,
        longitude: -121.66104,
        date: "2021-3-18",
        timestamps: true,
    },



];

db.LogEvent.deleteMany({})
    .then(() => db.LogEvent.collection.insertMany(eventSeed))
    .then(data => {
        console.log(data.result.n + " events inserted into MongoDatabase!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });