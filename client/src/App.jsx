import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const BACKEND_URL = 'http://localhost:5001/api';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get(`${BACKEND_URL}/notes`);
    setNotes(res.data.notes);
  };

  const createNote = async () => {
    await axios.post(`${BACKEND_URL}/notes`, { title, content });
    setTitle('');
    setContent('');
    fetchNotes();
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/notes/${id}`);
    fetchNotes();
    } catch (error) {
      console.log(error)
    }
  };

  const searchNotes = async () => {
   try {
    const res = await axios.get(`${BACKEND_URL}/notes/search?q=${query}`);
    setNotes(res.data.note);
   } catch (error) {
      console.log(error)
   }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app-container">
      <h1>Catfact Notes</h1>
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="input"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={createNote}>Add Note</button>

      <input
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && searchNotes()}
      />
      <button onClick={searchNotes}>Search</button>

      <div className="notes-list">
        {notes.length>0 && notes.map((note) => (
          <div className="note-card" key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <em>{note.catfact}</em>&nbsp;
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;