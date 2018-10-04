let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaName = 'Weather'

let schema = new Schema({
    name: { type: String },
    temp: { type: Number },
    desc: { type: String }
})

module.exports = mongoose.model(schemaName, schema)