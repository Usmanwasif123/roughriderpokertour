import EditProfile from './Pages/EditProfile';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurTournament from './Pages/OurTournament';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/edit-your-profile' element={<EditProfile/>}/>
        <Route path='our-tournament' element={<OurTournament/>}/>
      </Routes>
    </Router>
  );
}

export default App;
