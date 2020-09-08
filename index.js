require('dotenv').config()

const {Pool} = require('pg')
const express = require('express')
const creds = require('./config')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')());
app.use('/',require('./route'))

const client = new Pool(creds)

app.listen(process.env.PORT,async()=>{
    console.log(`Server Started on port ${process.env.PORT}`)
})

