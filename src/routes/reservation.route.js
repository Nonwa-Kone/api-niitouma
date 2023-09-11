const express = require('express')
const { postReservation } = require('../controls/reservation.controller')

const route = new express.Router()

route.post("/reservation", postReservation)

module.exports = route