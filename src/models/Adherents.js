const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const AdherentSchema = new Schema({
  nom: {
    type: String,
    required: [true, "Veuillez entrer un nom"],
    trim: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2,
  },
  prenom: {
    type: String,
    required: [true, "Veuillez entrer un prenom"],
    trim: true,
    lowercase: true,
    maxLength: 255,
    minLength: 3,
  },
  telephone: {
    type: String,
    required: [true, "Veuillez entrer un numéro de téléphone"],
    trim: true,
    lowercase: true,
    maxLength: 10,
  },
  email: {
    type: String,
    required: [true, "Veuillez entrer un email"],
    lowercase: true,
    unique: true,
  },
  genre: {
    type: String,
    required: [true, "Veuillez entrer un genre"],
    trim: true,
    lowercase: true,
    maxLength: 10,
  },
  profession: {
    type: String,
    required: [true, "Veuillez entrer votre profession"],
    trim: true,
    lowercase: true,
  },
  nombreExperience: {
    type: Number,
    required: [true, "Veuillez entrer un nombre d'experience"],
    trim: true,
  },
  domaineIntervention: {
    type: [String],
    required: true,
    lowercase: true,
  },
  pays: {
    type: String,
    required: [true, "Veuillez entrer un pays"],
    trim: true,
    lowercase: true,
  },
  ville: {
    type: String,
    required: [true, "Veuillez entrer une ville"],
    trim: true,
    lowercase: true,
  },
  quartier: {
    type: String,
    required: [true, "Veuillez entrer un quartier"],
    trim: true,
    lowercase: true,
  },
  realisations: [
    {
      image: {
        type: String,
        required: false,
        lowercase: true,
      },
      description: {
        type: String,
        required: false,
        lowercase: true,
      },
    },
  ],
  commentaire: [
    {
      nom: {
        type: String,
        required: false,
        lowercase: true,
      },
      note: {
        type: Number,
        required: false,
        trim: true,
      },
      message: {
        type: String,
        required: false,
        lowercase: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  imageProfil: {
    type: String,
    required: false,
    trim: true,
  },
  faceCarteIdentiteImage: {
    type: String,
    required: false,
    lowercase: true,
  },
  dosCarteIdentiteImage: {
    type: String,
    required: false,
    lowercase: true,
  },
});

module.exports = mongoose.model("Adherent", AdherentSchema);
