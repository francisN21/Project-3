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

        date: "2021-2-25",
    },
    {

        title: "Hikes",

        description: "Angel Island",

        latitude: 37.85858,

        longitude: -122.43071,

        date: "2021-2-25",


        timestamps: true,

    },
    {

        title: "Ferris Wheel",

        description: "Golden Gate Park Ferris Wheel",

        latitude: 37.77169,

        longitude: -122.46661,

        date: "2021-2-25",


        timestamps: true,

    },
    {

        title: "Dance Party",

        description: "Flash Mob Dance Party",

        latitude: 37.76869,

        longitude: -122.47527,

        date: "2021-2-25",


        timestamps: true,

    },



];

db.LogEvent.deleteMany({})
    .then(() => db.LogEvent.collection.insertMany(eventSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });