require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routerAdherent = require('./src/routes/adherent.route')
const connectDB = require('./src/services/services')
const routeReservation = require('./src/routes/reservation.route')

const app = express()



// MIDLEWARE
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.static('public'))

app.use(cors())

// ROUTE
app.use("/api/v1/", routerAdherent)
app.use("/api/v1/", routeReservation)


app.listen(process.env.PORT, process.env.ADRESSE, ()=>{
    connectDB(process.env.MONGO_URL_MONGOATLAS).then(()=> console.log("Base de donnée connecté")).catch(err=> console.log(err))
    console.log(`[SERVEUR] est démarré au port ${process.env.PORT}`);
})