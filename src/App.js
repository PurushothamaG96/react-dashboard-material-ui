import About from "./pages/About";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/setting" element={<Setting/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
