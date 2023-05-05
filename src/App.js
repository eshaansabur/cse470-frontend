import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer';
import Menu from './Pages/Menu/Menu';
import Deals from './Pages/Deals/Deals';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails';
import MakeOrder from './Pages/MakeOrder/MakeOrder';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path='/deals' element={<Deals></Deals>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/cart' element={<MakeOrder></MakeOrder>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
