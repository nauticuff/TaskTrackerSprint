import './App.css';
import Login from './Components/Login/Login';
import DashboardComponent from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router';
import AccountComponent from './Components/Account/AccountComponent';
import CreateAccount from './Components/CreateAccountComponent/CreateAccounts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='/Dashboard' element={<DashboardComponent />} />
          <Route path='Account' element={<AccountComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
