//import controller! 
const PirateController = require('../controllers/pirate.controller');


//these routes must match in your useEffect/axios functions in your React app!!! 
module.exports = app =>{
    app.get('/api/pirates', PirateController.findAll);
    app.get('/api/pirates/:id', PirateController.FindOne);
    app.put('/api/pirates/:id', PirateController.updateOne);
    app.post('/api/pirates', PirateController.createNew);
    app.delete('/api/pirates/:id', PirateController.deleteOne);
    //sorted array
    app.get('/api/piratessorted', PirateController.findSorted);
}

//get sorted could be something like this where findSorted is a special CRUD method you write with find().sort()!!!
//app.get('/api/authors', AuthorController.findSORTED)