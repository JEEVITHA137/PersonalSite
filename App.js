import Navbar from './Components/Navbar.js';
import Name from './Components/Name.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import './App.css';

function App() {
  return(
    <body>
      <div>
      <img className="bg_img" alt=""></img>
      <div>
        <Navbar/>
        <Name/>
      </div>
      </div>
      <About/>
      <Contact/>
    </body>
 );
}
export default App;



