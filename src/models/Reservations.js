const mongoose = require('mongoose')

const { Schema } = mongoose

const ReservationSchema = new Schema({
    ville: {
        type: String,
        required: true
    },
    quartier: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    adherent: {
        type: mongoose.Types.ObjectId,
        ref: 'Adherent',
        required: true
    }
},{timestamps:true}
)

module.exports = mongoose.model('reservation', ReservationSchema)