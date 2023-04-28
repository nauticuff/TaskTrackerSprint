import './App.css';
import Login from './components/Login/Login';
import DashboardComponent from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import CreateAccount from './components/CreateAccountComponent/CreateAccount';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Login />} /> */}
          <Route path='/' element={<CreateAccount />} />
          <Route path='/Dashboard' element={<DashboardComponent />} />
          {/* <Route path='Account' element={<Account />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
