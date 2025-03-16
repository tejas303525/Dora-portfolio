
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Team from "./pages/Team"
import Testimonials from "./pages/Testimonials"
import Project from "./pages/Project"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/About" element={<About />} /> 
      <Route path="/Blog" element={<Blog />} /> 
      <Route path="/Project" element={<Project/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Testimonials" element={<Testimonials/>} />
      <Route path="/Error" element={<Error/>} />
      <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
