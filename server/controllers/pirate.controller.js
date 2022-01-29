
//import model to fill out queries! 
const Pirate = require('../models/pirate.model');

//create and export all CRUD methods from built in mongoose library here! 
//!--------------------------------FIND ALL---------------
module.exports.findAll = (req, res) =>{
    Pirate.find()
    .then(allPirates => res.json({allPirates : allPirates}))
    .catch( err => res.json({message: "something went wrong at your FINDALL controller", error:err}))
}

//! -------------------FIND ALL SORTED -------------------------
module.exports.findSorted =(req, res) =>{
    Pirate.find().sort("name")
    .then(sortedPirates =>res.json({sortedPirates :sortedPirates}))
    .catch(err => res.json({message: "something went wrong at your SORTED controller", error:err}))
} 

//!-------------------------------FIND ONE---------------

module.exports.FindOne =(req, res) =>{
    Pirate.findOne({_id: req.params.id})
        .then(onePirate => res.json({onePirate: onePirate}))
        .catch(err => res.json({ message: "something went wrong at your FINDONE controller", error:err}))
}

//!------------------------------CREATE ONE---------------

module.exports.createNew =(req, res) =>{
    Pirate.create(req.body)
        .then(newPirate => res.json({newPirate: newPirate}))
        .catch(err => {
            res.status(400).json(err)
        })
}

//!------------------------------Update ONE---------------
module.exports.updateOne =(req, res) =>{
    Pirate.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true})
        .then( updatePirate => res.json({updatePirate: updatePirate}))
        .catch(err => res.status(400).json(err))
}

//!------------------------------DELETE ONE---------------
module.exports.deleteOne =(req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(deleted => res.json({deleted: deleted}))
        .catch(err => res.json({ message: "something went wrong at your DELETE controller", error:err}))
}