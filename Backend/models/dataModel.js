const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    last: {
        type : Number,
        // require: true
    },
    buy: {
        type : Number,
        // require: true
    },
    sell:{
        type : Number,
        // require: true
    },
    volume: {
        type : Number,
        // require: true
    },
    base_unit:{
        type : String,
        // require: true
    }
})
// name, last, buy, Sell, volume, base_uni
const dataModel = new mongoose.model('data', dataSchema );

module.exports = dataModel;