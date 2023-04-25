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
          <Route path='/' element={<Login />} />
          {/* <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Account' element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
