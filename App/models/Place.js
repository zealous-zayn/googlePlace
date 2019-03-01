'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let placeSchema = new Schema({
    place_id : {type:String, unique: true, index: true, default:''},
    lattitude : { type: Number, default:"" },
    longitude : { type: Number, default:"" },
    formatted_address : {type: String, default:""},
    name:{type: String, default:""},
    type : [],
    created : {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Place', placeSchema)