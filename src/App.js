import './App.css';
import Menu from './component/Menu.js';
import Home from  './component/Home.js';
import About from  './component/About.js';
import Work from './component/Work.js';
import Project from './component/Project.js';
import Academic from './component/Academic.js';
import Contact from  './component/Contact.js';
import CopyRight from  './component/CopyRight.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Home />
      <About />
      <Work />
      <Project />
      <Academic />
      <footer>
        <Contact />
        <CopyRight />
      </footer>
    </div>
  );
}

export default App;
