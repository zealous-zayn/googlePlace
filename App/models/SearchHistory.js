const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let searchHistortSchema = new Schema({
    userId : {type: String, default:""},
    searchedQuery:{type: String, default:""},
    placeDetails : {type : JSON, default:""},
    created : {type: Date, default: Date.now()}
})

module.exports = mongoose.model('SearchHistory', searchHistortSchema)