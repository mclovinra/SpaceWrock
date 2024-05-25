const { request , response } = require("express");

const { equipos } = require("../equipos");

const getEquipos =  ( req , res ) => {
    return res.json({
        ok:true,
        statusCode:200,
        equipos
    })
} 

const getEquipoById = ( req = require , res = response ) => {
    let id = parseInt(req.params.id);

    let equipoABuscar = equipos.find((equipo) => {
        return equipo.id === id;
    });

    if(equipoABuscar){
        return res.json({
            ok:true,
            statuscode: 200,
            equipoABuscar
        })
    }else{
        return res.json({
            ok:false,
            statusCode: 404,
            msg:"no hay equipo con ese id"
        })
    }
}

module.exports = {
    getEquipos,
    getEquipoById
}