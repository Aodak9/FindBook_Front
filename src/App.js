import NavBar from './components/dumbComponents/NavBar/NavBar';
import Card from './components/dumbComponents/Card/Card';
import Footer from './components/dumbComponents/Footer/Footer';
function App() {
  return (
    <div className='w-screen h-screen bg-greyBlack-100'>
      <NavBar/>
      <h1>Imagenes paginados</h1>
      <h1>Componentes con libros</h1>
      <Card/>
      <h1>Paginados con imagenes con categorias</h1>
      <h1>Libro destacado de la semana</h1>
      <Footer/>
    </div>
  );
}

export default App;
