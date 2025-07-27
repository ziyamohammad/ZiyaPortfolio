
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
import useWindowWidth from './components/usewindowwidth';
import Fullpage from './components/Fullpage';
import Responsive from './components/Responsive';




function App() {

  const width = useWindowWidth();
  return (
    <div className="App">
      <CustonCursor/>
      <Router>
        {width<=670?<Responsive/>:""}
    <Header/>
    <div className="mainitem">
    <Main/>

    <Routes>
        <Route
              path="/"
              element={width <= 1125 ? <Fullpage/> : <About />} 
            />
      <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>}  />
         <Route path="/works" element={<Work/>}  />
          <Route path="/skills" element={<Skils/>}  />
           <Route path="/contact" element={<Contact/>}  />
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
