import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Note from './Components/Note';
import notes from '../src/Components/notes'

function App() {
  return (
    <div className="App">
      <Header />
      <Note 
          title="This is the title"
          content="This is the note content"
      />
      <Footer /> 
    </div>
  );
}

export default App;
