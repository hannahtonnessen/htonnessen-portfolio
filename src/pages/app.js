import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from './about';
import Projects from './projects';
import Layout from './layout';
import './app.css';

const App = ()  => {
  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" index element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
     
    </Routes>
    </BrowserRouter>
    )
  };

  export default App;