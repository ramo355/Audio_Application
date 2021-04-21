const {Schema, model, Types} = require('mongoose');

const audio = new Schema({
name: {
    type: String,
    required: true
},
title: {
    type: String,
    required: true
},
genre: {
    type: String,
    required: true
},
file: {
type: String
},
img: {
    type: String
}
});

module.exports = model('Audio', audio);