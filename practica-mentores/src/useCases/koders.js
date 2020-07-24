const { response } = require('express')
const Koders = require('../models/koders')
const bcrypt = require ('../lib/bcrypt')
const jwt = require('../lib/jwt')
const koders = require('../models/koders')

function getAll() {
    return Koders.find()
}

function create(koder) {
    return Koders.create(koder)
}

function deleteKoder(id) {
    return Koders.findOneAndDelete({ _id: id })
}

function updateKoder(id, data) {
    return Koders.findByIdAndUpdate(id, data)
}


async function signup (koderData) {


    const { password } = koderData
    const { email } = koderData
    console.log('password', password)

    // ecnriptar la contraseña
    const passwordEcripted = await bcrypt.hash(password)
    console.log('passwordEncripted', passwordEcripted)

   
    return Koders.create({
        ...koderData,
        password: passwordEcripted
    })
}


async function login (email, passwordPlain) {
    const koderByEmail = await Koders.findOne({ email })
    if (!koderByEmail) {
        //se ejecuta cuando no hay un koder
        throw new Error('Email not found')
    }

    // verificar que si sea su password
    const isValid = await bcrypt.compare(passwordPlain, koderByEmail.password)
        if (!isValid) {
            throw new Error('password not valid')
        }


    
        
        return jwt.sign({ id: koderByEmail._id })

}




module.exports = {
    getAll,
    create,
    deleteKoder,
    updateKoder,
    signup,
    login
}

