import './App.css';
import HomePage from './components/HomePage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RedirectPage from './components/RedirectPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/redirect" element={<RedirectPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
