var mongoose = require('mongoose');
var Customer = mongoose.model("Customer");


module.exports = (function(){
  return {
    showCustomers: function(req,res){
      Customer.find({}, function(err, results){
        if(err){
          console.log("Mongo Database Show customers Errors:", err)
        } else {
          res.json(results);
        }
      });
    },

    addCustomer: function(req,res){
      var customer = new Customer(req.body);
        customer.save(function(err) {
            if(err) {
                console.log("saveCustomer Server Controller errors:", customer.errors);

                res.json({title: "you have errors", errors: customer.errors});
            }
            else {
                console.log("Customer added:", customer);
                res.redirect('/customers');
            }
        });
    },
    destroy: function(req,res){

      Customer.remove({_id:req.params.id}, function(err){
        if(err){
          console.log("Customer delete error:", err);
          }
          else {
              console.log("Customer deleted!");
              res.redirect("/#customers");
          }

      });
    }




  }
})();
