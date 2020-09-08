require('dotenv').config()
const {Pool,Client} = require('pg')


const client = new Client({
    user: 'postgres',
    host: '2.tcp.ngrok.io',
    database: 'postgres',
    password:process.env.DB_PASS,
    port: '11655',
    ssl: false
})


client.connect().then(d=>{
    console.log("lol")
}).catch(e=>{
    console.log('lmao')
})
