var customer = require('../controllers/customers.js');
var product = require('../controllers/products.js');

module.exports= function(app){

  app.get('/customers', function(req,res){
      customer.showCustomers(req,res);
    });
  app.post('/addCustomer', function(req,res){
     customer.addCustomer(req,res);
    });

  app.get('/destroy/:id', function(req,res){
    customer.destroy(req,res);
  });

  app.get('/products', function(req,res){
    product.showProduct(req,res);
  });

  app.post('/newProduct', function(req,res){
     product.saveProduct(req,res);
  });

  app.get('/orders', function(req,res){
     product.getOrders(req,res);
  });

  app.post('/newOrder', function(req,res){
     product.saveOrder(req,res);
    });

// app.post('/updateProduct', function(req,res){
//    product.updateProduct(req,res);
//   });


}
