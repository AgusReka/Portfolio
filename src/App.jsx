
import './App.scss';
import { Routes, Route } from "react-router-dom";

import Home from './HomeFolder/Home';
import AboutMePage from './AboutMeFolder/AboutMePage';
import Projects from './ProjectsFolder/Projects';
export default function App() {
  return ( 
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
    </div>
  );
}


