import './App.css';
import Menu from './component/Menu.js';
import Home from  './component/Home.js';
import Work from './component/Work.js';
import Project from './component/Project.js';
import Contact from  './component/Contact.js';
import CopyRight from  './component/CopyRight.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Home />
      <Work />
      <Project />
      <footer>
        <Contact />
        <CopyRight />
      </footer>
    </div>
  );
}

export default App;
