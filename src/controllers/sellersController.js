var request = require("request");

var options = {
  method: 'GET',
  url: 'https://api.zoop.ws/v1/marketplaces/05b5d8163a1f461588081b0528e65898/sellers/bf05632bf8b5427c808c19b5e80ce896/documents',
  qs: {limit: '20', sort: 'time-descending', offset: '0'},
  headers: {accept: 'application/json'}
};

module.exports = { 
    getSellersList() {
      request(options, function (error, response, body) {
        if (error) 
          throw new Error(error);

        console.log(body);
      });
  }
}


