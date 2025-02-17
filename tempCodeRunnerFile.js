const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const router = require('./routes');
app.use(cors());
app.use(router);



app.listen(4000, ()=>{
    console.log("Aplicacao rodando na porta 4000")
})