const express = require ('express');

const crearUsuario = (req, res = express.request ) => {
    res.json({
        ok: true
    })
}

const loginUsuario =(rq, res = express.request ) => {
    res.json({
        ok: true
    })
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok: true
    })
}

module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}