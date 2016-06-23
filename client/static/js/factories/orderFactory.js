myApp.factory('orderFactory', function($http){

  var products = [];
  var orders = [];
  var factory = {};
  var changed =[];

  factory.getProducts = function(callback){
    $http.get('/products').success(function(output){
      products = output;
      callback(products);
    });
  }

  factory.getOrders = function(callback){
    $http.get('/orders').success(function(output){
      orders = output;
      callback(orders);
    });
  }



  factory.saveProduct = function(info){
    $http.post('/newProduct', info).success(function(info){
      products.push(info);
    })
  }

  factory.saveOrder = function(info, callback){
    $http.post('/newOrder', info).success(function(result){
      orders.push(result);
      for( var product of products){
        if(info.proName == product.name){
          product.quantity -= info.quantity;
        }
      }
      callback(products);

      console.log(info);
      console.log(result);

    });
  // console.log(orders);
  }


  return factory;
})
