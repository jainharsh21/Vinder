require('dotenv').config()
const {Pool} = require('pg')
const express = require('express')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('cors')());



const client = new Pool({
    user: 'postgres',
    host: '2.tcp.ngrok.io',
    database: 'vinder',
    password:process.env.DB_PASS,
    port: '11655',
    ssl: false
})


app.listen(process.env.PORT,async()=>{
    console.log(`Server Started on port ${process.env.PORT}`)
    const data = await client.query("SELECT * FROM events")
    console.log(data)
})

