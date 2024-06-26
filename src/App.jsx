import EditProfile from './Pages/EditProfile';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/edit-your-profile' element={<EditProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
