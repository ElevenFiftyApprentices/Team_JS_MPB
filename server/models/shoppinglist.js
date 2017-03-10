var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShoppingListSchema = new Schema({
	title: {
		type: String,
		default: ""
	},
	category: {
		type: String,
		default: ""
	},
	url: {
		type: String,
		default: ""
	},
	content: {
		type: String,
		default: ""
	},
	specificUser: {
		type: String,
		default: ""
	}
});

module.exports = mongoose.model("ShoppingList", ShoppingListSchema);