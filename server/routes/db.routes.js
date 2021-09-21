const PetController = require('../controllers/db.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pet/:id', PetController.findOnePet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.post('/api/pet', PetController.createNewPet);
    app.delete('/api/pet/:id', PetController.deleteOnePet);
}