import {Routes,Route} from "react-router-dom";
import Login from './componentes/Login';
import Listado from './componentes/Listado';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Detalle from "./componentes/Detalle";
function App() {
  return(
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/listado" element={<Listado/>} />
      <Route path="/detalle" element={<Detalle/>} />
    </Routes>
    <Footer/>
    </>
  );
  
}

export default App;
