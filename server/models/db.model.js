const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "A pet name is required."], 
        minlength: [3, "Pet name must be at least 3 characters long."]
    },
    type: { 
        type: String, 
        required: [true, "A pet type is required."], 
        minlength: [3, "Pet type must be at least 3 characters long."]
    },
    description: {
        type: String, 
        required: [true, "A pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters long"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;