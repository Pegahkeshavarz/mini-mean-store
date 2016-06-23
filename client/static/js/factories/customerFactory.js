
myApp.factory('customerFactory', function($http){
  factory = {};
  customers = [];

  factory.getCustomers = function(callback){
     $http.get('/customers').success(function(output){
       customers = output;
       callback(customers);
       console.log(customers);
     })
  };

  factory.addCustomer = function(info, callback) {

        $http.post("/addCustomer", info).success(function(result) {

                customers.push(result);
                console.log(result);
                callback(info);
        });

    };




  return factory;
})
