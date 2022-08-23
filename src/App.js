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
  }

  return (
    <div className="App">
      <Header />
      <CreateArea
        onAdd = {addNote}
       />
      {notes.map((noteItem, index) => (
        <Note 
          key={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer /> 
    </div>
  );
}

export default App;
