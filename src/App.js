import Navbar from './Components/Navbar.js';
import Name from './Components/Name.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Education from './Components/Education.js';
import SpecialSkills from './Components/SpecialSkills.js';
import Projects from './Components/Project.js';
import Hobbies from './Components/Hobbies.js';
import './App.css';

function App() {
  return(
    <body>
      <div >
        <Navbar/>
        <Name/>
      </div>
      <About/>
      <Education/>
      <SpecialSkills/>
      <Projects/>
      <Hobbies/>
      <Contact/>
    </body>
 );
}
export default App;



