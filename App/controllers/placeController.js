const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const validateInput = require('./../libs/paramValidationLib');
const passwordLib = require('./../libs/generatePasswordLib')
const check = require('./../libs/checkLib');
const token = require('./../libs/tokenLib');
const appConfig = require('./../../config/appConfig')
const request = require('node-fetch')

const UserModel = mongoose.model('User')
const PlaceModel = mongoose.model('Place')
const SearchHistoryModel = mongoose.model('SearchHistory')

// Function add place details to database
let insertPlace = async (data) => {
    let result = await PlaceModel.find({place_id : data.place_id})
    if(check.isEmpty(result)){
        let newPlace = new PlaceModel({
            place_id: data.place_id,
            lattitude: data.geometry.location.lat,
            longitude: data.geometry.location.lng,
            formatted_address: data.formatted_address,
            name: data.name,
            type: data.type,
            created: time.now()
        })
    
        let placeDetails = await newPlace.save()
        try {
            console.log(placeDetails)
            return placeDetails
        } catch (err) {
            console.log(err)
            return err
        }
    } else {
        console.log("Place already Exist in our database")
    }
    
}

// Function to get place details of user current location
let getPlaceDetailsByLocation = async (req, res) => {
    let userDetails = await new Promise(async (resolve) => {
        const result = await UserModel.findOne({ 'userId': req.params.userId, 'verified': true }).select('-password -__v -_id').lean().exec();
        try {
            if (check.isEmpty(result)) {
                logger.captureInfo('No User Found', 'User Controller:getSingleUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                resolve(result)
            }
        } catch (err) {
            console.log(err)
            logger.captureError(err.message, 'User Controller: getSingleUser', 10)
            let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
            res.send(apiResponse)
        }
    })

    await new Promise(async () => {
        if(userDetails.currentLocation.lat !== '' && userDetails.currentLocation.lng !==''){
        let placeDetails = await PlaceModel.find({ lattitude: userDetails.currentLocation.lat, longitude: userDetails.currentLocation.lng })
        try {
            if (check.isEmpty(placeDetails)) {
                let result = await request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userDetails.currentLocation.lat},${userDetails.currentLocation.lng}&key=${appConfig.googleKey}`)
                try {
                    let data = await result.json()
                    data.candidates.forEach(place => insertPlace(place))
                    let apiResponse = response.generate(false, "Current Location Place Details", 200, data.candidates)
                    res.send(apiResponse)
                } catch (err) {
                    logger.captureError(err.message, "Place Controller : getPlaceDetailsByLocation", 5)
                    let apiResponse = response.generate(true, "Failed to get place details", 500, null)
                    res.send(apiResponse)
                }
            } else {
                let apiResponse = response.generate(false, "Place details from dateBase", 200, placeDetails)
                res.send(apiResponse)
            }
        } catch (err) {
            logger.captureError(err.message, "Place Controller : getPlaceDetailsByLocation", 5)
            let apiResponse = response.generate(true, "Failed to get place details in our database", 500, null)
            res.send(apiResponse)
        }
    } else {
        let apiResposne = response.generate(true, "User Current Location not updated")
        res.send(apiResposne)
    }
    })
} // End

// Function to get place details by Name query search
let nameQuerySearch = async (req, res) => {
    let placeDetails = await PlaceModel.find({ name: req.params.querySearch })
    try {
        if (check.isEmpty(placeDetails)) {
            let result = await request(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${appConfig.googleKey}&input=${req.params.querySearch}&inputtype=textquery&fields=place_id,formatted_address,name,geometry,types`)
            try {
                let data = await result.json()
                let newSearchHistory = new SearchHistoryModel({
                    userId: req.query.userId,
                    searchedQuery: req.params.querySearch,
                    placeDetails: data,
                    created: { type: Date, default: Date.now() }
                })
                let historyDetails = await newSearchHistory.save()
                try {
                    console.log(historyDetails)
                } catch (err) {
                    console.log(err)
                }
                let apiResponse = response.generate(false, "Current Location Place Details", 200, data.candidates)
                res.send(apiResponse)
            } catch (err) {
                logger.captureError(err.message, "Place Controller : getPlaceDetailsByLocation", 5)
                let apiResponse = await response.generate(true, "Failed to get place details", 500, null)
                res.send(apiResponse)
            }
        } else {
            let apiResponse = response.generate(false, "Place details from dateBase", 200, placeDetails)
            res.send(apiResponse)
        }
    } catch (err) {
        logger.captureError(err.message, "Place Controller : getPlaceDetailsByLocation", 5)
        let apiResponse = response.generate(true, "Failed to get place details in our database", 500, null)
        res.send(apiResponse)
    }
} //end

// Function to get place details near by currentlocation of user
let nearByPlaces = async (req, res) => {
    let userDetails = await new Promise(async (resolve) => {
        const result = await UserModel.findOne({ 'userId': req.params.userId, 'verified': true }).select('-password -__v -_id').lean().exec();
        try {
            if (check.isEmpty(result)) {
                logger.captureInfo('No User Found', 'User Controller:getSingleUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                resolve(result)
            }
        } catch (err) {
            console.log(err)
            logger.captureError(err.message, 'User Controller: getSingleUser', 10)
            let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
            res.send(apiResponse)
        }
    })
    await new Promise(async()=>{
        if(userDetails.currentLocation.lat !== '' && userDetails.currentLocation.lng !==''){
        let result = await request(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userDetails.currentLocation.lat},${userDetails.currentLocation.lng}&radius=${req.query.radius}&type=${req.query.type}&key=${appConfig.googleKey}`)
        try{
            let data = await result.json()
            data.candidates.forEach(place => insertPlace(place))
            let apiResponse = response.generate(false, "All near by places", 200, data.candidates)
            res.send(apiResponse)
        } catch(err){
            logger.captureError(err.message, "Place Controller : nearByPlaces", 5)
            let apiResponse = await response.generate(true, "Failed to get place details", 500, null)
            res.send(apiResponse)
        }
    }else {
        let apiResposne = response.generate(true, "User Current Location not updated")
        res.send(apiResposne)
    }

    })
} //end

// Function to get place details text query search
let textQuerySearchPlaces = async(req, res)=>{
    let result = await request(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.textQuery}&key=${appConfig.googleKey}`)
    try{
        let data = await result.json()
        data.candidates.forEach(place => insertPlace(place))
        let apiResponse = response.generate(false, "All places Details", 200, data.candidates)
        res.send(apiResponse)
    } catch(err){
        logger.captureError(err.message, "Place Controller : textQuerySearchPlaces", 5)
        let apiResponse = await response.generate(true, "Failed to get place details", 500, null)
        res.send(apiResponse)
    }
} //end


module.exports = {
    getPlaceDetailsByLocation: getPlaceDetailsByLocation,
    nameQuerySearch: nameQuerySearch,
    nearByPlaces : nearByPlaces,
    textQuerySearchPlaces : textQuerySearchPlaces
}