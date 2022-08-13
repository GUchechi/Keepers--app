import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import notes from '../src/Components/notes'

 const  createNote = (noteItem) => {
  return <Note 
    title = {noteItem.title}
    content  = {noteItem.content}
  />
}

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(createNote)}
      <Footer /> 
    </div>
  );
}

export default App;
