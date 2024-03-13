const express = require ('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config()

const server = express();

server.use(express.json());
server.use(express.urlencoded({extends: 'true'}));
server.use(cors());
server.use(bodyParser.json());
const PORT = 7000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

server.listen(PORT,() =>{
    console.log(`O server está rodando em http:\\localhost:${PORT}`);
});