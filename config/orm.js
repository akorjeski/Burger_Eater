// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    
    displayAll: function(cb) {
      var queryString = "SELECT burger_name FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // updateDevoured: function(objColVals, condition, cb) {
    //     var queryString = "UPDATE burgers WHERE 
    
    //     console.log(queryString);
    //     connection.query(queryString, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    //   },
    // addNew: function(objColVals){}
    
    
    
    // };




// Export the orm object for the model (cat.js).
module.exports = orm;