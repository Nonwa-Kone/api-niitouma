const Reservation = require("../models/Reservations")


module.exports.postReservation = async(req, res) =>{
    console.log(req.body.ville);
    // new reservation
    const reservation =  Reservation(req.body)
    // save reservation in the database
    try {
        const reser = await reservation.save()
        res.status(200).json({ message: "Votre reservation à été prise en compte nous vous contacterons dans quelque s'instant" })
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error" })
    }
}


// {
//     ville: req.body.ville,
//     quartier: req.body.quartier,
//     nom: req.body.nom,
//     prenom: req.body.prenom,
//     email: req.body.email,
//     adherent: req.body.id
// }
