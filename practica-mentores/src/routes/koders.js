const express = require('express')
const router = express.Router()

const koders = require('../usecases/koders')
const { request, response } = require('express')


router.use((request, response, next) =>{
    console.log('middleware a nivel de router:', request.mau),
    next()
},(request, response, next) =>{
    console.log('middleware a nivel de router 2:'),
    next()
})

router.get('/', (request, response, next) => {
    console.log('middleware de endpoint GET koders')
    next()
},
async (request, response) => {
    try {
        const allKoders = await koders.getAll()
        response.json({
            success: true,
            data: {
                koders: allKoders
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
        const newKoderData = request.body
        const newKoder = await koders.create(newKoderData)
        response.json({
            success: true,
            data: {
                newKoder
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
        const koder = await koders.deleteKoder(id)
        response.json({
            success: true,
            koder
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
        const koder = await koders.updateKoder(id, data)
        response.json({
            success: true,
            msg:"OK!!"
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router