import './App.css';
import Login from './Components/Login'
import Registration from './Components/assets/sign';
import './Components/assets/sign.css'
import './Components/assets/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes ,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Toy Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
          <Routes>
            <Route path='/' element={<Login/>}/>
            {<Route path='/home' element={<home/>}/>}
            { <Route path='/register' element={<Registration/>}/> }
            <Route path='/' element={<home></home>}></Route>
            <Route path='/home' element={<home></home>}></Route>
          </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;