import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Main from './components/Main'
import AcademicsandHostel from './components/Tables/AcademicsandHostel'
import AccountDetailsandSummary from './components/Tables/AccountDetailsandSummary'
import GetClearance from './components/Tables/GetClearance'
import Library from './components/Tables/Library'
import Mess from './components/Tables/Mess'
import Others from './components/Tables/Others'
import Login from './components/Login';
import Home from './components/Home'
import Error from './components/Error';
import Now from './components/Tables/Now'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Main/>}>
          <Route path='about' element={<Home/>}/>
          <Route path='accountdetails' element={<AccountDetailsandSummary/>}/>
          <Route path='acadhostel' element={<AcademicsandHostel/>}/>
          <Route path='library' element={<Library/>}/>
          <Route path='mess' element={<Mess/>}/>
          <Route path='others' element={<Others/>}/>
          <Route path='getclearance' element={<GetClearance/>}/>
          <Route path='now'element={<Now/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
        <Route path='*/*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;