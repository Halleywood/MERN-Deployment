const mongoose =require('mongoose');
const DB = "pirates_db";


//special method in mongoose library that connects to your DB! 
mongoose.connect("mongodb://localhost/" + DB , {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then( ()=>console.log('***CONNECTED TO YOUR ' + DB +' DATABASE!***'))
.catch( err=>console.log("%%%something went wrong when connecting to database%%%", err))