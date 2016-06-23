var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  name:{ type: String, required:true},
  quantity:{ type: Number, requires:true},
  description:{ type: String, required:true},
  url:{type: String, required:true}
}, {timestamps: true});

productSchema.path("name").validate(function(val) {
    return val.length > 1;
}, "Customer name must be two letters or more.");

// Order form validation
productSchema.path("name").required(true, "Please select a customer.");

productSchema.path("url").required(true, "Please add a url.");

productSchema.path("description").required(true, "Please add a description.");

productSchema.path("quantity").required(true, "Please select a quantity.");


mongoose.model('Product', productSchema);
