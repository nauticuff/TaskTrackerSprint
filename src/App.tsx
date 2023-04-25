import './App.css';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <p>Hello</p>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
