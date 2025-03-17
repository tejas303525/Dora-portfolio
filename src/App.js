
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import Team from "./pages/Team"
import Testimonials from "./pages/Testimonials"
import Project from "./pages/Project"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MediumPosts from "./pages/MediumPosts"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/About" element={<About />} /> 
      <Route path="/Blog" element={<MediumPosts />} /> 
      <Route path="/Project" element={<Project/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Testimonials" element={<Testimonials/>} />
      <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
