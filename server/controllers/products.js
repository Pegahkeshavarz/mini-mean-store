
var mongoose = require('mongoose');
var Product = mongoose.model("Product");
var Order = mongoose.model("Order");


module.exports = (function(){
  return {

    showProduct: function(req,res){
      Product.find({}, function(err,results){
        if(err) {
                  console.log("Mongo Show Products Error:", err);
              }
              else {
                  res.json(results);
              }
      });
    },
    saveProduct: function(req,res){
      var product = new Product(req.body);
        product.save(function(err) {
            if(err) {
                console.log("saveProduct Server Controller errors:", product.errors);

                res.json({title: "you have errors", errors: product.errors});
            }
            else {
                console.log("product added:", product);
                res.redirect('/#products');
            }
        });
    },
     getOrders: function(req,res){
       Order.find({}, function(err,results){
         if(err) {
                   console.log("Mongo Show Products Error:", err);
               }
               else {
                   res.json(results);
               }
       });
     },
     saveOrder: function(req,res){
console.log(req.body);
       var order = new Order(req.body);

         order.save(function(err) {
             if(err) {
                //  console.log("saveorder Server Controller errors:", order.errors);
                // console.log(err);
                // Order.find({}, function(err, orders){
                //   console.log(orders);
                // })

                 res.json({title: "you have errors", errors: order.errors});
             }
             else {
                 console.log("order added:", order);
                //  res.redirect('/#orders');
                Product.findOne({_id: req.body.prodid}, function(err, orders){
                  if(err){
                    console.log("something went wrong");
                  } else {
                    orders.quantity-=req.body.quantity;
                    orders.save();
                    console.log('///////////////////////');
                    console.log(orders);
                    res.json(orders);
                }
                })
             }
         });
     }
    //  updateProduct: function(req,res){
    //    console.log('-----------updated product is-----------');
    //    console.log(req.body);
    //    console.log('-----------updated product is-----------');
     //
    //    var product = new Product({
    //       quantity: req.body.qty
    //   });
    //   product.update({_id: req.body.id[0]}, {quantity: req.body.qty[0]}, function(err, results) {
    //      //console.log("product is" + product.name)
    //      if(err){
    //        console.log("something went wrong");
    //      } else {
    //        console.log(results);
    //       res.redirect("/#orders");
    //     }
    //   });
    //  }


}
})();
