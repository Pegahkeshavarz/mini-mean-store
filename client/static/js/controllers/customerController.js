myApp.controller('customerController', function ($scope, customerFactory) {
   $scope.customers=[];
   var duplicated_name = false;


   customerFactory.getCustomers(function(data){
     $scope.customers = data
     console.log(customers)
   });

   $scope.addCustomer = function(){
     $scope.new_customer.formated_date = moment().format('MMMM Do YYYY');
     $scope.new_customer.fomated_time = moment().endOf('').fromNow();  
     for(var i in $scope.customers) {
            if($scope.new_customer.name === $scope.customers[i].name) {
                duplicate_found = true;
                $scope.error = "There is already a customer with that name.";
                console.log("$scope.error:", $scope.error);
            }
        }
    if(!duplicated_name){
      customerFactory.addCustomer($scope.new_customer, function (errors) {
           $scope.errors = errors;
           console.log($scope.new_customer);
            customerFactory.getCustomers(function (data) {
                $scope.customers = data;

            });

            $scope.new_customer = {};

        })
    }
   }
});
