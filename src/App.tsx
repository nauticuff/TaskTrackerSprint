import './App.css';
import Login from './Components/Login/Login';
import DashboardComponent from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          {/* <Route path='/CreateAccount' element={<CreateAccount />} /> */}
          <Route path='/Dashboard' element={<DashboardComponent />} />
          {/* <Route path='Account' element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
