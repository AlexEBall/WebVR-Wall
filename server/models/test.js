const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const TestSchema = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    clicked: {
        type: String
    },
    backgroundImg: {
        type: String
    },
    type: {
        type: String
    }
});

console.log('test schema created!');
const Test = mongoose.model("Test", TestSchema);
module.exports = Test;