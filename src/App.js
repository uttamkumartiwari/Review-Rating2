import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/user/usersignup';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<AddUser/>} />
          </Routes>
        </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
