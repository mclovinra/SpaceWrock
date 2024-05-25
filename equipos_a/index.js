const express = require("express");
const app = express();
const port = 3001;

const { getEquipos , getEquipoById } = require("./controllers/equipos-controller");

//--------------------------------------------

//localhost:3001

//La función se pasa por referecia

app.get("/" , getEquipos);

app.get("/:id" , getEquipoById);

//---------------------------------------------

app.listen(port, ()=> {
    console.log(`Servidor correindo exitosamente en el puerto: ${port}`);
})