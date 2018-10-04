let mongoose = require('mongoose')
let Schema = mongoose.Schema

let schemaName = 'Image'

let schema = new Schema({
    imageUrl: { type: String }
})

module.exports = mongoose.model(schemaName, schema)