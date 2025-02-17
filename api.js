const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const userRoutes = require('./Routes/UserRoute');
const imagesRoutes = require('./Routes/ImageRoute')
app.use(cors());
app.use(userRoutes);
app.use(imagesRoutes);



app.listen(4000, ()=>{
    console.log("Aplicacao rodando na porta 4000")
})