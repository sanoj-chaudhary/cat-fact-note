const express = require('express');
const router = express.Router();
const NoteController = require('../controllers/noteController');

router.get('/', NoteController.getAllNotes);
router.post('/', NoteController.createNote);
router.delete('/:id', NoteController.deleteNote);
router.get('/search', NoteController.searchNotes);

module.exports = router;