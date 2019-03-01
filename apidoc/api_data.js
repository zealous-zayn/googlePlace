define({ "api": [
  {
    "group": "Places",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/place/current-location/:userId",
    "title": "api for place details of user current location.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the user. (Url params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Current Location Place Details\",\n    \"status\": 200,\n    \"data\": {\n        \"candidates\": [\n            {\n                \"formatted_address\": \"Fort, Mumbai, Maharashtra, India\",\n                \"geometry\": {\n                    \"location\": {\n                        \"lat\": 18.9352599,\n                        \"lng\": 72.8371511\n                    },\n                    \"viewport\": {\n                        \"northeast\": {\n                            \"lat\": 18.9490849,\n                            \"lng\": 72.844617\n                        },\n                        \"southwest\": {\n                            \"lat\": 18.92022,\n                            \"lng\": 72.82804600000001\n                        }\n                    }\n                },\n                \"name\": \"Fort\",\n                \"place_id\": \"ChIJTRyL8MTR5zsRXqmzdxFVHvI\",\n                \"types\": [\n                    \"sublocality_level_1\",\n                    \"sublocality\",\n                    \"political\"\n                ]\n            }\n        ],\n        \"status\": \"OK\"\n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/location.js",
    "groupTitle": "Places",
    "name": "PostApiV1PlaceCurrentLocationUserid"
  },
  {
    "group": "Places",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/place/nearBy-current-location/:userId",
    "title": "api for place details near by user current location.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the user. (Url params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "radius",
            "description": "<p>radius in which place details need. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type of place. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All near by places\",\n    \"status\": 200,\n    \"data\": {\n        \"candidates\": [\n            {\n                \"formatted_address\": \"Fort, Mumbai, Maharashtra, India\",\n                \"geometry\": {\n                    \"location\": {\n                        \"lat\": 18.9352599,\n                        \"lng\": 72.8371511\n                    },\n                    \"viewport\": {\n                        \"northeast\": {\n                            \"lat\": 18.9490849,\n                            \"lng\": 72.844617\n                        },\n                        \"southwest\": {\n                            \"lat\": 18.92022,\n                            \"lng\": 72.82804600000001\n                        }\n                    }\n                },\n                \"name\": \"Fort\",\n                \"place_id\": \"ChIJTRyL8MTR5zsRXqmzdxFVHvI\",\n                \"types\": [\n                    \"sublocality_level_1\",\n                    \"sublocality\",\n                    \"political\"\n                ]\n            }\n        ],\n        \"status\": \"OK\"\n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/location.js",
    "groupTitle": "Places",
    "name": "PostApiV1PlaceNearbyCurrentLocationUserid"
  },
  {
    "group": "Places",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/place/text-search/:querySearch",
    "title": "api for place details by name.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "querySearch",
            "description": "<p>Name of the place. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>user id of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Current Location Place Details\",\n    \"status\": 200,\n    \"data\": {\n        \"candidates\": [\n            {\n                \"formatted_address\": \"Fort, Mumbai, Maharashtra, India\",\n                \"geometry\": {\n                    \"location\": {\n                        \"lat\": 18.9352599,\n                        \"lng\": 72.8371511\n                    },\n                    \"viewport\": {\n                        \"northeast\": {\n                            \"lat\": 18.9490849,\n                            \"lng\": 72.844617\n                        },\n                        \"southwest\": {\n                            \"lat\": 18.92022,\n                            \"lng\": 72.82804600000001\n                        }\n                    }\n                },\n                \"name\": \"Fort\",\n                \"place_id\": \"ChIJTRyL8MTR5zsRXqmzdxFVHvI\",\n                \"types\": [\n                    \"sublocality_level_1\",\n                    \"sublocality\",\n                    \"political\"\n                ]\n            }\n        ],\n        \"status\": \"OK\"\n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/location.js",
    "groupTitle": "Places",
    "name": "PostApiV1PlaceTextSearchQuerysearch"
  },
  {
    "group": "Places",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/place/textquery-search",
    "title": "api for place details by text search.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "textQuery",
            "description": "<p>text query which user searched. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All near by places\",\n    \"status\": 200,\n    \"data\": {\n        \"candidates\": [\n            {\n                \"formatted_address\": \"Fort, Mumbai, Maharashtra, India\",\n                \"geometry\": {\n                    \"location\": {\n                        \"lat\": 18.9352599,\n                        \"lng\": 72.8371511\n                    },\n                    \"viewport\": {\n                        \"northeast\": {\n                            \"lat\": 18.9490849,\n                            \"lng\": 72.844617\n                        },\n                        \"southwest\": {\n                            \"lat\": 18.92022,\n                            \"lng\": 72.82804600000001\n                        }\n                    }\n                },\n                \"name\": \"Fort\",\n                \"place_id\": \"ChIJTRyL8MTR5zsRXqmzdxFVHvI\",\n                \"types\": [\n                    \"sublocality_level_1\",\n                    \"sublocality\",\n                    \"political\"\n                ]\n            }\n        ],\n        \"status\": \"OK\"\n    }\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/location.js",
    "groupTitle": "Places",
    "name": "PostApiV1PlaceTextquerySearch"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getAllUsers",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n            \"verified\": true,\n            \"email\": \"fslkhn93@gmail.com\",\n            \"mobileNumber\": \"91 876799554\",\n            \"countryName\": \"India\",\n            \"lastName\": \"Khan\",\n            \"firstName\": \"Faisal\",\n            \"userId\": \"kqdFThCqv\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersGetallusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/singleUser/:userId",
    "title": "api for getting user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"verified\": true,\n        \"email\": \"fslkhn93@gmail.com\",\n        \"mobileNumber\": \"91 876799554\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Khan\",\n        \"firstName\": \"Faisal\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersSingleuserUserid"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deleteUser",
    "title": "api to Delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"verified\": true,\n        \"email\": \"fslkhn93@gmail.com\",\n        \"password\": \"$5a$18$XvGxf9JX76JvvIeqwd2CoOdxtCraX23nA5ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 876799554\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Khan\",\n        \"firstName\": \"Faisal\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteuser"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkJKc0NubExxWCIsImlhdCI6MTUzODgxNzIzNDUzNCwiZXhwIjoxNTM4OTAzNjM0LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJsZXRzTWVldEFwcCIsImRhdGEiOnsiZnJpZW5kUmVxdWVzdFNlbnQiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRzIjpbXSwiZW1haWxWZXJpZmllZCI6IlllcyIsInZhbGlkYXRpb25Ub2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZDNScFpDSTZJa0o1ZFdaTFRWTTFOeUlzSW1saGRDSTZNVFV6T0RjMU9Ea3lOemszTWl3aVpYaHdJam94TlRNNE9EUTFNekkzTENKemRXSWlPaUpoZFhSb1ZHOXJaVzRpTENKcGMzTWlPaUpzWlhSelRXVmxkRUZ3Y0NJc0ltUmhkR0VpT25zaVgybGtJam9pTldKaU56azFNbVJtWWpVNFpXRXhNVGM0TWpBMU9UQTBJaXdpWDE5Mklqb3dMQ0pqY21WaGRHVmtUMjRpT2lJeU1ERTRMVEV3TFRBMVZERTJPalExT2pNekxqQXdNRm9pTENKbGJXRnBiRlpsY21sbWFXVmtJam9pV1dWeklpd2lkbUZzYVdSaGRHbHZibFJ2YTJWdUlqb2lJaXdpWlcxaGFXd2lPaUp6YUdGb2NuVnJhSE5oZVhsbFpDNTBaV05vUUdkdFlXbHNMbU52YlNJc0luQmhjM04zYjNKa0lqb2lKREpoSkRFd0pGWXpZbXRLVjBKbFZHOXphelYwTlM0d2VreEVaQzVJZUhoaVMzY3djSGxTUTBkNE5rVTFjMlJpTDBZNWVXdEZMekJGVmtwbElpd2ljM1JoZEhWeklqb2liMlptYkdsdVpTSXNJbWx6UVdSdGFXNGlPaUoxYm1SbFptbHVaV1FpTENKdGIySnBiR1ZPZFcxaVpYSWlPaUk1TVNBM09EUXdPVFl5T0RnM0lpd2lZMjkxYm5SeWVVNWhiV1VpT2lKSlRpSXNJblZ6WlhKT1lXMWxJam9pZFc1a1pXWnBibVZrSWl3aWJHRnpkRTVoYldVaU9pSlRZWGw1WldRaUxDSm1hWEp6ZEU1aGJXVWlPaUpUYUdGb2NuVnJhQ0lzSW5WelpYSkpaQ0k2SWxOclFrVklabE01TnlKOWZRLm1ocWs0Y2JzX1gyX2dieWtvUExydlJTU2drOHF4elRLLVBtU2V4ZGZ4V3ciLCJlbWFpbCI6InNoYWhydWtoc2F5eWVkLnRlY2hAZ21haWwuY29tIiwic3RhdHVzIjoib2ZmbGluZSIsImlzQWRtaW4iOiJ1bmRlZmluZWQiLCJtb2JpbGVOdW1iZXIiOiI5MSA3ODQwOTYyODg3IiwiY291bnRyeU5hbWUiOiJJTiIsInVzZXJOYW1lIjoidW5kZWZpbmVkIiwibGFzdE5hbWUiOiJTYXl5ZWQiLCJmaXJzdE5hbWUiOiJTaGFocnVraCIsInVzZXJJZCI6IlNrQkVIZlM5NyJ9fQ.-du1nE9FDeCDVf7fA7JjGVIPcYY7hb9TxvGLH6fYxd0\",\n        \"userDetails\": {\n            \"verified\": true,\n            \"email\": \"fslkhn93@gmail.com\",\n            \"mobileNumber\": \"91 7840962887\",\n            \"countryName\": \"IN\",\n            \"lastName\": \"Faisal\",\n            \"firstName\": \"Khan\",\n            \"userId\": \"kqdFThCqv\",\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": false,\n\"message\": \"User Created\",\n\"status\": 200,\n\"data\": [\n    {\n        \"createdOn\": \"2018-09-12T13:42:58.000Z\",\n        \"emailVerified\": \"Yes\",\n        \"validationToken\": \"Null\",\n        \"email\": \"sayyedsofttech313@gmail.com\",\n        \"password\": \"$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa\",\n        \"mobileNumber\": \"91 7840962887\",\n        \"countryName\": \"India\",\n        \"lastName\": \"Sayyed\",\n        \"firstName\": \"Shahrukh\",\n        \"userId\": \"kqdFThCqv\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update-location",
    "title": "api to Update current location.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "currentLocation",
            "description": "<p>Longitude and lattitude of the current location of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User current location Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "App/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUpdateLocation"
  }
] });
