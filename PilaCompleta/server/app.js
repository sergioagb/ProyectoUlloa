//importaciones
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { use } = require("./routes/routes");

const app = express();
const port = process.env.PORT // 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("uploads"));

//Conexion a base de datos
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(()=>console.log('Conectado a la base de datos'))
.catch(err => console.log(err));

//routes
app.use("/api/post", require("./routes/routes"));

//Iniciar el servidor
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));