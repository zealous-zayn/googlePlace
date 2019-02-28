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
const request = require('request')

const UserModel = mongoose.model('User')
const PlaceModel = mongoose.modelNames('Place')

// Function to get place details of user current location
let getPlaceDetailsByLocation = async(req, res)=>{
    let userDetails = await new Promise(async(resolve)=>{
        const result = await UserModel.findOne({ 'userId': req.params.userId, 'verified': true }).select('-password -__v -_id').lean().exec();
        try{
            if (check.isEmpty(result)) {
                logger.captureInfo('No User Found', 'User Controller:getSingleUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                resolve(result)
            }
        } catch(err){
            console.log(err)
                logger.captureError(err.message, 'User Controller: getSingleUser', 10)
                let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                res.send(apiResponse)
        }
    })
    
    await new Promise(async()=>{
        let result = await request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${userDetails.cuurentLocation}&key=${appConfig.googleKey}`)
        try{
            let apiResponse = response.generate(false, "Current Location Place Details",200, result)
            res.send(apiResponse)
        } catch(err){
            logger.captureError(err.message, "Place Controller : getPlaceDetailsByLocation", 5)
            let apiResponse = response.generate(true, "Failed to get place details", 500, null)
            res.send(apiResponse)
        }
    })
} // End

module.exports = {
    getPlaceDetailsByLocation : getPlaceDetailsByLocation
}