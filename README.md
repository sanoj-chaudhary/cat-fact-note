# Cat-Fact Notes App

A simple and fun MERN stack (MongoDB, Express, React, Node.js) note-taking application that assigns a random cat fact to each note created.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/sanoj-chaudhary/cat-fact-note.git
cd cat-fact-note
```

### Start the Backend

```bash
cd server
npm install
node app.js
```

> Make sure MongoDB is running locally at `mongodb://localhost:27017`

### Start the Frontend

```bash
cd client
npm install
npm start
```

> React app runs on [http://localhost:5173](http://localhost:5173) if using Vite (or default [http://localhost:3000](http://localhost:3000) for CRA)

---

## Features

* Create notes with a title and long-form content.
* Each note is tagged with a random cat fact from catfact.ninja.
* View all notes in a list format.
* Search notes by title, content, or cat fact.
* Delete notes.
* Minimal but responsive and functional UI.

---

## Tech Stack

* Frontend: React, Axios
* Backend: Node.js, Express.js, MongoDB, Mongoose
* Utilities: Axios (for HTTP requests), CORS, Morgan (logger)

---

## API Endpoints

| Method | Endpoint              | Description                                  |
| ------ | --------------------- | -------------------------------------------- |
| POST   | `/notes`              | Create a note (auto-fetches a cat fact)      |
| GET    | `/notes`              | Retrieve all notes                           |
| DELETE | `/notes/:id`          | Delete a specific note by ID                 |
| GET    | `/notes/search?q=...` | Search notes by keyword (title/content/fact) |



## Author

Made by Sanoj Chaudhary

---

## License

MIT License
