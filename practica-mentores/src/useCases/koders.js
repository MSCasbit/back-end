const { response } = require('express')
const Koders = require('../models/koders')

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

module.exports = {
    getAll,
    create,
    deleteKoder,
    updateKoder
}