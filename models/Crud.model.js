const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:String,required:true},
    city:{type:String,required:false},
    state:{type:String,required:false}
})


const crudModel = mongoose.model('crud1',crudSchema);

module.exports = crudModel;