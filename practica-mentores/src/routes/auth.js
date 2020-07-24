const express = require ('express')
const { route } = require('./koders')

const router = express.Router()

const koder = require ('../useCases/koders')
const koders = require('../models/koders')

router.post('/sign-up', async (request, response) => {
    try {
        const signedUpKoder = await koder.signup(request.body)
            response.json({
            success: true,
            data: {
                koder: signedUpKoder
            }
        })
    }catch (error) {
        response.status(400)
        response.json({
            succes: false,
            error: error.message
        })
    }
   
})

module.exports = router

router.post('/sign-in', async (request, response) => {
    try{
        const {password, email} = request.body
        const token = await koder.login(email, password)
        response.json({
            success: true,
            data: {
                token
            }
        })
    }catch (error) {
        response.status(401)
        response.json({
            succes: false,
            error: error.message
        })
    }
})