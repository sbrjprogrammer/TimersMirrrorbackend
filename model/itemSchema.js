const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true
    }
});

module.exports = mongoose.model("Item", ItemSchema);