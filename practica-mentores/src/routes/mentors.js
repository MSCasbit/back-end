const express = require('express')
const router = express.Router()

const mentors = require('../usecases/mentors')

router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            data: {
                mentors: allMentors
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const newMentorData = request.body
        const newMentor = await mentors.create(newMentorData)
        response.json({
            success: true,
            data: {
                newMentor
            }
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const nemtor = await mentors.deleteMentor(id)
        response.json({
            success: true,
            nemtor
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const id = request.params.id
        const data = request.body
        const nemtor = await mentors.updateMentor(id, data)
        response.json({
            success: true,
            msg: "OK!!"
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router