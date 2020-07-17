const mongoose = require('mongoose')



function connect() {
    return mongoose.connect('mongodb+srv://mauricio:Shashelin1@fish-chips.un9hh.mongodb.net/kodemia', {
        useNewUrlParser: true,
        useUnifiedTopology: true
         }
    )
}

module.exports = connect