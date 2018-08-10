 var mongoose = require('mongoose')
 var quoteSchema = new mongoose.Schema({
     name: String,
     quote: String
 });

 quoteSchema.methods.speak = function () {
 var greeting = this.name
 ? this.name + "quote saved"
 : "I don't have a name";
 console.log(greeting);
 }

 var Quote = mongoose.model('Quote', quoteSchema);

 module.exports = Quote;
