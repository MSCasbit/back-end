
const { response } = require('express')
const Mentors      = require('../models/mentors')

function getAll() {
    return Mentors.find()
}

function create(koder) {
    return Mentors.create(koder)
}

function deleteMentor(id) {
    return Mentors.findOneAndDelete({ _id: id })
}

function updateMentor(id, data) {
    return Mentors.findByIdAndUpdate(id, data)
}

module.exports = {
    getAll,
    create,
    deleteMentor,
    updateMentor
}