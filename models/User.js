const {Schema, model, Types} = require('mongoose');

const user = new Schema({
email: {type: String, required: true, unique:true},
password: {type: String, required: true},
playlist: {
    items: {
        audioId: Schema.Types.ObjectId,
        ref: 'Audio'
    }
}
})

module.exports = model('User', user)