const router = require('express').Router()

const {getAllEvents} = require('./controllers/event')

router.get('/event',getAllEvents)

module.exports = router