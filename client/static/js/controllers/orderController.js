myApp.controller('orderController', function ($scope, orderFactory, customerFactory) {

  orderFactory.getProducts(function(data){
    $scope.products = data;
  });

  orderFactory.getOrders(function(data){
    console.log(data);
    $scope.orders = data;
    console.log($scope.orders);
  });

  customerFactory.getCustomers(function(data){
    $scope.customers = data;
    console.log(customers)
  });

  $scope.addProduct = function(){
    orderFactory.saveProduct($scope.new_product);
    orderFactory.getProducts(function(data){
      $scope.products = data;
    })
  }


  $scope.addOrder = function(){
    console.log($scope.choosed);
    //orderFactory.updateProduct($scope.choosed.product._id, $scope.choosed.quantity);
    $scope.newProduct = {cusName: $scope.choosed.name,proName: $scope.choosed.product.name, quantity:$scope.choosed.quantity, prodid:$scope.choosed.product._id};
    orderFactory.saveOrder($scope.newProduct, function(prods){
      $scope.products = prods;
    });
    orderFactory.getOrders(function(data){
      $scope.orders = data;
    });


    $scope.choosed = {}
  }

  // $scope.showMore = function(){
  //  $scope.limit += 4;
  // }



});
