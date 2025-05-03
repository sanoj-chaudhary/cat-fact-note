
const Note = require('../model/note.model');
const axios = require('axios');
const mongoConnection = require('../config/db');
mongoConnection();
class NoteController {
  static async getAllNotes(req,res) {
    try {
      const notes = await Note.find();
      return res.status(200).json({notes,success:true});
    } catch (error) {
      return res.status(500).json({success:false});
    }
  }

  static async createNote(req,res) {
    try {
      const { title, content } = req.body;
      const factRes = await axios.get('https://catfact.ninja/fact');
      const catfact = factRes.data.fact;

      const newNote = new Note({ title, content, catfact });
      await newNote.save();
    return res.status(200).json({note:newNote,success:true});
    } catch (error) {
      return res.status(500).json({success:false});
    }
  }

  static async updateNote(req,res) {
    try {
      const {id, note} = req.body;
      const updatedNote = await Note.findByIdAndUpdate(id, note);
      return res.status(200).json({note:updatedNote,success:true});
    } catch (error) {
      return res.status(500).json({success:false});
    }
  }
  static async deleteNote(req,res) {
    try {
      const {id} = req.params;
      const deletedNote = await Note.findByIdAndDelete(id);
      return res.status(200).json({note:deletedNote,success:true});
    } catch (error) {
      console.log(error)
      return res.status(500).json({success:false});
    }
  }

  static async searchNotes(req,res) {
    try {
      const query = req.query.q;
      const results = await Note.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } },
          { catfact: { $regex: query, $options: 'i' } },
        ],
      });
      return res.status(200).json({note:results,success:true});
    } catch (error) {
      res.status(500).json({ error: 'Search failed' });
    }
  }
}

module.exports = NoteController