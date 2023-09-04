require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.status(200).json({message: "РОБОТОЕТ !!!!"})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server startedd on port ${PORT}`))
    }
    catch (e) {
        console.log("Хуйня")
        console.log(e)
        console.log(process.env.DB_NAME)
    }
}

start();