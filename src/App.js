
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
      <Navbar/>
   <Home />
   <SocialLinks/>
   <Experience/>
    <Portfolio/>
   <Contact/>
    </div>
   
  );
}

export default App;
