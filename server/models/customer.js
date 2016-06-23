var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true},
  formated_date : {type:String}
}, {timestamps: true});


CustomerSchema.path("name").validate(function(val) {
    return val.length > 1;
}, "Customer name must be two letters or more.");

CustomerSchema.path("name").required(true, "Please add a name!");

mongoose.model('Customer', CustomerSchema);
