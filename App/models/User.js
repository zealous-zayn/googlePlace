'use strict'

const mongoose = require('mongoose');
    const Schema = mongoose.Schema;


let userSchema = new Schema({
    userId: {
        type: String,
        default: '',
        index: true,
        unique: true
      },
      firstName: {
        type: String,
        default: ''
      },
      lastName: {
        type: String,
        default: ''
      },
      password: {
        type: String,
        default: 'passskdajakdjkadsj',
        required: true
      },
      email: {
        type: String,
        default: '',
        required : true
      },
      mobileNumber: {
        type: Number,
        default: 0
      },
      currentLocation : {
         lat : {type:Number, default:""},
         lng: {type:Number, default:""}
      },
      lastLocation : {
        lat : {type:Number, default:""},
        lng: {type:Number, default:""}
      },
      searchHistory : [{
          placeId:{type:String, default:""},
          formatedAddress:{type:String, default:""}
      }],
      createdOn :{
        type:Date,
        default:""
      }
})


module.exports = mongoose.model('User', userSchema);