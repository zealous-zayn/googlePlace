let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/googlePlaceDB'
}

appConfig.apiVersion = '/api/v1';
appConfig.googleKey = 'AIzaSyATi4UkST6MxHPx9rVaS0r90JwRhlyVQQY'

module.exports = {
    port : appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion,
    googleKey : appConfig.googleKey
};