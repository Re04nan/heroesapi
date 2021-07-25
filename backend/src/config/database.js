const mongoose = require('mongoose');

function connection () {
    mongoose.connect("mongodb://localhost:27017/heroesapi", {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        dbName: "heroesapi",
        useCreateIndex: true
    })
    .then(()=> {
        console.log("Conexão realizada com sucesso! - MongoDB");
    })
    .catch((error)=>{
        console.log(error);
    });
}

module.exports = connection();