import { useState } from 'react';
import './App.css';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
// import notes from '../src/Components/notes'



function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  };

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        onAdd = {addNote}
       />
     {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer /> 
    </div>
  );
}

export default App;
