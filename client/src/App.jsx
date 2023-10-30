import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Auu } from './pages/Context'
import Movies from './pages/Movies';
import Search from './pages/Search';
const App = () => {
  return (
    <Auu>

    <BrowserRouter  >
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/moviedetails/:id' element={<Movies />} />
          <Route path='/search' element={<Search/>}/>

        </Routes>

    </BrowserRouter>
    </Auu>



  );
}

export default App;
