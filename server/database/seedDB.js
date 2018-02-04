const mongoose = require("mongoose");
const db = require("../server/models");
const Test = require("../server/models/test");

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/webvr-wall"
);

console.log("seedDB file running")
const seedDB = [{
        "id": 1,
        "name": "Link",
        "image": "./public/images/link.png",
        "clicked": false,
        "backgroundImg": "./public/images/1200px-Royalfamilytomb.png",
        "type": ""
    },
    {
        "id": 2,
        "name": "Princess Zelda",
        "image": "./public/images/zelda.png",
        "clicked": false,
        "backgroundImg": "./public/images/background.png",
        "type": ""
    },
    {
        "id": 3,
        "name": "Ganondorf",
        "image": "./public/images/ganondorf.png",
        "clicked": false,
        "backgroundImg": "./public/images/Bottom_of_the_Well.png",
        "type": ""
    },
    {
        "id": 4,
        "name": "Epona",
        "image": "./public/images/epona.png",
        "clicked": false,
        "backgroundImg": "./public/images/Dodongos_Cavern.png",
        "type": ""
    },
    {
        "id": 5,
        "name": "Sheik",
        "image": "./public/images/sheik.png",
        "clicked": false,
        "backgroundImg": "./public/images/Fire_Temple.png",
        "type": ""
    },
    {
        "id": 6,
        "name": "Malon",
        "image": "./public/images/malon.png",
        "clicked": false,
        "backgroundImg": "./public/images/Great_Fairy_Fountain.png",
        "type": ""
    },
    {
        "id": 7,
        "name": "Princess Ruto",
        "image": "./public/images/ruto.png",
        "clicked": false,
        "backgroundImg": "./public/images/Inside_the_Deku_Tree.png",
        "type": ""
    },
    {
        "id": 8,
        "name": "Nabooru",
        "image": "./public/images/nabooru.png",
        "clicked": false,
        "backgroundImg": "./public/images/Spirit_Temple.png",
        "type": ""
    },
    {
        "id": 9,
        "name": "Impa",
        "image": "./public/images/impa.png",
        "clicked": false,
        "backgroundImg": "./public/images/zelda_castillo.jpg",
        "type": ""
    }
];


console.log("seed-db file created!");

db.Test
    .remove({})
    .then(() => db.Test.collection.insertMany(seedDB))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
    })
