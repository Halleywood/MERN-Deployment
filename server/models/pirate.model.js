const mongoose = require("mongoose");

//create an instance of mongoose.schema, fill in EXACTLY how you want it stored in database!!!! 
const PirateSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "You must enter a name!"],
        minlength: [3, "your name must be 3 characters"]
    }, 
    imageURL: {
        type:String, 
        required: [true, "please enter an image URL"],
        minLength: [3, "your image URL needs to have characters"]
    }, 
    treasure:{
        type: Number, 
        required: [true, "please enter a number of treasure chests!"], 
        min:[1, "your pirate should have some treasure"]
    },
    catchPhrase:{
        type: String, 
        required: [true, "enter a catch phrase why don't ya?!"],
        minlength: [3, "your phrase should be longer than 3 characters"]
    },
    pegLeg:{
        type: Boolean, 
        default: true
    },
    eyePatch:{
        type: Boolean, 
        default: true
    },
    hookHand:{
        type: Boolean, 
        default: true
    },
    crewPosition:{
        type: String, 
        required: [true, "choose a position!"],
        minLength: [1, "choose a crew position"]
    }
    //timestamp will create another key:value with time created at! 
}, {timestamps: true})

//export the model so your controller can use it to query! 
const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;