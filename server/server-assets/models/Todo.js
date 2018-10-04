let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaName = 'Todo'

let schema = new Schema({
    description: { type: String },
    user: { type: String },
    completed: { type: Boolean }
})

module.exports = mongoose.model(schemaName, schema)