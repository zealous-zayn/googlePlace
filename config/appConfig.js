let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/googlePlaceDB'
}

appConfig.apiVersion = '/api/v1';
appConfig.googleKey = 'Your_Google_Api_key'

module.exports = {
    port : appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion,
    googleKey : appConfig.googleKey
};