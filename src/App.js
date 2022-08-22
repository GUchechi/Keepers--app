import './App.css';
import CreateArea from './Components/CreateArea';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Note from './Components/Note';
// import notes from '../src/Components/notes'



function App() {
  return (
    <div className="App">
      <Header />
      {/* {notes.map((noteItem, index) => (
        <Note 
          key={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} */}
      <CreateArea />
      <Footer /> 
    </div>
  );
}

export default App;
