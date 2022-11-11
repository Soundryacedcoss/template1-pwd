import './App.css';
import { SignUp } from './SignUp';
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './SignIn';

function App() {
  return (
    <div className="App">
       <Navbar/>
    <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    </Routes>
    </div>
  );
}

export default App;
