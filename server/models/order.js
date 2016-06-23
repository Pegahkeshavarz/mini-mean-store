var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    cusName: { type: String, required:true },
    proName: String,
    quantity: Number
}, {timestamps: true});

// OrderSchema.path("cusName").required(true, "Please select a customer.");
//
// OrderSchema.path("proName").required(true, "Please select a product.");
//
// OrderSchema.path("quantity").required(true, "Please select a quantity.");
mongoose.model("Order", OrderSchema);
