const Pet = require('../models/db.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => {
            res.json({ message: 'all pets-->', results: allPets })
        })
        .catch(err => res.json(err))
}

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(onePet => {
            res.json({ message: 'one pet -->', results: onePet })
        })
        .catch(err => res.json(err))
}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => {
            res.json({ message: 'new pet created -->', results: newPet })
        })
        .catch(err => res.json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then(updatedPet => {
            res.json({ message: 'pet updated-->', results: updatedPet })
        })
        .catch(err => res.json(err))
}

module.exports.deleteOnePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedOnePet => {
            res.json({ message: 'one pet adopted and gone from db-->', results: deletedOnePet })
        })
        .catch(err => res.json(err))
}