//import express from 'express';
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

//Base de datos
dbConnection();

// configurar cors
app.use(cors());

// Rutas
app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola gordo '
    })
} );

app.listen( process.env.PORT, ( )=> {
    console.log('Servidor corriendo en http//:localhost:' + process.env.PORT);
})



// mean_user
// 15H4KQYwFTF4CG5R