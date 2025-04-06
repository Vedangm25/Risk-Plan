import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Risk from './Risk';
import './index.css'
import Low from './Low';
import High from './High';
import Medium from './Medium';
import Contact from "./Contact";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/risk" element={<Risk/>} />
      <Route path="/low" element={<Low/>} />
      <Route path="/medium" element={<Medium/>} />
      <Route path="/high" element={<High/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )

};

export default App
