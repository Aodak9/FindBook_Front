import NavBar from './components/dumbComponents/NavBar/NavBar';
import Footer from './components/dumbComponents/Footer/Footer';
import {Routes, Route} from 'react-router-dom'
import Detail from './components/dumbComponents/Detail/Detail';
import Shop from './components/dumbComponents/Shop/Shop';
import Loggin from './components/smartComponents/Loggin/Loggin';
import Contact from './components/smartComponents/Contact/Contact'
import SearchByName from './components/dumbComponents/Detail/SearchByName/SearchByName';
import Home from './components/dumbComponents/Home/Home';
import CreatePost from './components/smartComponents/CreatePost/CreatePost';

function App() {
  return (
    <div className='w-screen h-screen bg-greyBlack-100'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/postbook' element={<CreatePost/>}/>
        <Route path='/loggin' element={<Loggin/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/busqueda/:name' element={<SearchByName/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
