import NavBar from './components/dumbComponents/NavBar/NavBar';
import {Routes, Route} from 'react-router-dom'
import Detail from './components/dumbComponents/Detail/Detail';
import Shop from './components/dumbComponents/Shop/Shop';
import Loggin from './components/smartComponents/Loggin/Loggin';
import Contact from './components/smartComponents/Contact/Contact'
import SearchByName from './components/dumbComponents/SearchByName/SearchByName';
import Home from './components/dumbComponents/Home/Home';
import CreatePost from './components/smartComponents/CreatePost/CreatePost';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getAllBooks, getGenres, getYears} from  './redux/actions/actions'
import SearchByCategory from './components/dumbComponents/SearchByCategory/SearchByCategory';
function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBooks())
    dispatch(getGenres())
    dispatch(getYears())
  }, [dispatch])

  return (
    <div className='w-full h-full bg-greyBlack-100'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/postbook' element={<CreatePost/>}/>
        <Route path='/loggin' element={<Loggin/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/busqueda/:name' element={<SearchByName/>}/>
        <Route path='/categoria/:genre' element={<SearchByCategory/>}/>
      </Routes>
    </div>
  );
}

export default App;
