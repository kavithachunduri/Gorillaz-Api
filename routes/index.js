const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('This is the root!'))

router.post('/songs', controllers.createSong)

router.get('/songs',controllers.getAllSongs)

router.get('/songs/:id',controllers.getSongById)

router.put('/songs/:id',controllers.updateSong)
router.delete('/songs/:id',controllers.deleteSong)

module.exports = router;