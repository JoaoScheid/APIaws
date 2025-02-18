const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const userRoutes = require('./Routes/UserRoute');
const imagesRoutes = require('./Routes/ImageRoute')
const awsRoutes = require('./Routes/awsRoutes');
app.use(cors());
app.use(userRoutes);
app.use(imagesRoutes);
app.use(awsRoutes);



app.listen(3010, ()=>{
    console.log("Aplicacao rodando na porta 3010")
})