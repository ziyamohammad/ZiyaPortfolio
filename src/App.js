
import './App.css';
import About from './components/About';
import CustonCursor from './components/CustonCursor';
import CustomCursor from './components/CustonCursor';
import Header from './components/Header';
import Main from './components/Main';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Resume from './components/Resume';
import Work from './components/Work';
import Skils from './components/Skils';
import Contact from './components/Contact';




function App() {

 
  return (
    <div className="App">
      <CustonCursor/>
      <Router>
        <div className="headmain">
    <Header/>
    <Main/>
    </div>
    <Routes>
      <Route path="/" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
         <Route path="/works" element={<Work/>} />
          <Route path="/skills" element={<Skils/>} />
           <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
