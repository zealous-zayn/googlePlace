const express = require('express');
const router = express.Router();
const placeControllers = require("./../controllers/placeController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

let baseUrl = `${appConfig.apiVersion}/place`;

module.exports.setRouter = (app) =>{
    //urp params querySearch
    app.get(`${baseUrl}/text-search/:querySearch`,auth.isAuthorized, placeControllers.nameQuerySearch)
    /**
     * @apiGroup Places
     * @apiVersion  1.0.0
     * @api {post} /api/v1/place/text-search/:querySearch api for place details by name.
     *
     * @apiParam {string} querySearch Name of the place. (body params) (required)
     * @apiParam {string} userId user id of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Current Location Place Details",
            "status": 200,
            "data": {
                "candidates": [
                    {
                        "formatted_address": "Fort, Mumbai, Maharashtra, India",
                        "geometry": {
                            "location": {
                                "lat": 18.9352599,
                                "lng": 72.8371511
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 18.9490849,
                                    "lng": 72.844617
                                },
                                "southwest": {
                                    "lat": 18.92022,
                                    "lng": 72.82804600000001
                                }
                            }
                        },
                        "name": "Fort",
                        "place_id": "ChIJTRyL8MTR5zsRXqmzdxFVHvI",
                        "types": [
                            "sublocality_level_1",
                            "sublocality",
                            "political"
                        ]
                    }
                ],
                "status": "OK"
            }
        }
        }
    */

    app.get(`${baseUrl}/current-location/:userId`,auth.isAuthorized, placeControllers.getPlaceDetailsByLocation)
    /**
     * @apiGroup Places
     * @apiVersion  1.0.0
     * @api {post} /api/v1/place/current-location/:userId api for place details of user current location.
     *
     * @apiParam {string} userId User id of the user. (Url params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Current Location Place Details",
            "status": 200,
            "data": {
                "candidates": [
                    {
                        "formatted_address": "Fort, Mumbai, Maharashtra, India",
                        "geometry": {
                            "location": {
                                "lat": 18.9352599,
                                "lng": 72.8371511
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 18.9490849,
                                    "lng": 72.844617
                                },
                                "southwest": {
                                    "lat": 18.92022,
                                    "lng": 72.82804600000001
                                }
                            }
                        },
                        "name": "Fort",
                        "place_id": "ChIJTRyL8MTR5zsRXqmzdxFVHvI",
                        "types": [
                            "sublocality_level_1",
                            "sublocality",
                            "political"
                        ]
                    }
                ],
                "status": "OK"
            }
        }
        }
    */

    app.get(`${baseUrl}/nearBy-current-location/:userId`,auth.isAuthorized, placeControllers.nearByPlaces)
    /**
     * @apiGroup Places
     * @apiVersion  1.0.0
     * @api {post} /api/v1/place/nearBy-current-location/:userId api for place details near by user current location.
     *
     * @apiParam {string} userId User id of the user. (Url params) (required)
     * @apiParam {number} radius radius in which place details need. (query params) (required)
     * @apiParam {string} type Type of place. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All near by places",
            "status": 200,
            "data": {
                "candidates": [
                    {
                        "formatted_address": "Fort, Mumbai, Maharashtra, India",
                        "geometry": {
                            "location": {
                                "lat": 18.9352599,
                                "lng": 72.8371511
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 18.9490849,
                                    "lng": 72.844617
                                },
                                "southwest": {
                                    "lat": 18.92022,
                                    "lng": 72.82804600000001
                                }
                            }
                        },
                        "name": "Fort",
                        "place_id": "ChIJTRyL8MTR5zsRXqmzdxFVHvI",
                        "types": [
                            "sublocality_level_1",
                            "sublocality",
                            "political"
                        ]
                    }
                ],
                "status": "OK"
            }
        }
        }
    */

    app.get(`${baseUrl}/textquery-search`, auth.isAuthorized, placeControllers.textQuerySearchPlaces)
    /**
     * @apiGroup Places
     * @apiVersion  1.0.0
     * @api {post} /api/v1/place/textquery-search api for place details by text search.
     *
     * @apiParam {string} textQuery text query which user searched. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All near by places",
            "status": 200,
            "data": {
                "candidates": [
                    {
                        "formatted_address": "Fort, Mumbai, Maharashtra, India",
                        "geometry": {
                            "location": {
                                "lat": 18.9352599,
                                "lng": 72.8371511
                            },
                            "viewport": {
                                "northeast": {
                                    "lat": 18.9490849,
                                    "lng": 72.844617
                                },
                                "southwest": {
                                    "lat": 18.92022,
                                    "lng": 72.82804600000001
                                }
                            }
                        },
                        "name": "Fort",
                        "place_id": "ChIJTRyL8MTR5zsRXqmzdxFVHvI",
                        "types": [
                            "sublocality_level_1",
                            "sublocality",
                            "political"
                        ]
                    }
                ],
                "status": "OK"
            }
        }
        }
    */
}