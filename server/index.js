require('dotenv').config()

const {Pool} = require('pg')
const express = require('express')
const creds = require('./config')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')());
app.use('/',require('./route'))


app.listen(process.env.PORT,()=>{
    const client = new Pool(creds)
    app.locals.db = client;
    console.log(`Server running on port ${process.env.PORT}`)
})

