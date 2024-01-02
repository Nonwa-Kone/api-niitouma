const multer = require("multer");
const Adherents = require("../models/Adherents");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Creer un adherent
module.exports.createAdherent = async (req, res) => {
  const adherent = new Adherents(req.body);
  try {
    await adherent.save();
    res.status(200).json({ message: "Inscription effectuée avec succès" });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Trouver un adherent par son id
module.exports.findAdherentById = async (req, res) => {
  try {
    const id = req.params.id;
    const adherent = await Adherents.findById({ _id: id });
    res.status(200).json(adherent);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Lister tous les adherents
module.exports.listesDesAdherents = async (req, res) => {
  try {
    const adherent = await Adherents.find();
    res.status(200).json(adherent);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Supprimer un professionnel du systeme
module.exports.deleteAdherent = async (req, res) => {
  try {
    const id = req.params.id;
    const adherent = await Adherents.deleteOne({ _id: id });
    res.status(200).json(adherent);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Modifier les informations d'un professionnel
module.exports.updateAdherent = async (req, res) => {
  try {
    const updateAdherent = await Adherents.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updateAdherent);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Recherche de profession par filtre
module.exports.findAdherentByFilter = async (req, res) => {
  try {
    const { profession, ville } = req.query;
    console.log(profession);
    const adherents = await Adherents.find({
      profession: profession,
      ville: ville,
    });
    res.status(200).json(adherents);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Editer le contenu d'un adherent

module.exports.postCommentaire = async (req, res) => {
  try {
    console.log(req.body);
    await Adherents.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { commentaire: req.body } },
      { $new: true },
    );
    res.status(200).json({ msg: "Merci pour votre commentaire" });
  } catch (error) {
    res.status(500).send(error);
  }
};
