import {Routes,Route} from "react-router-dom";
import{useState,useEffect} from "react";
//componentes
import Login from './componentes/Login';
import Listado from './componentes/Listado';
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Detalle from "./componentes/Detalle";
import Resultados from "./componentes/Resultados";
import Favoritos from "./componentes/Favoritos";
//css
import "./css/app.css";

function App() {
  const [favorites,setFavorites]=useState([]);
    useEffect(() => {
        const favsInLocal=localStorage.getItem('favs');
        if(favsInLocal!==null){
            const favsArray=JSON.parse(favsInLocal);
            setFavorites(favsArray);
        }
        return () => {
            
        };
    }, []);
  const addOrRemoveFromAvs=e=>{
    const favMovies=localStorage.getItem('favs');
    let tempMovieInFavs;
    if(favMovies===null){
      tempMovieInFavs=[];
    }else{
      JSON.parse(favMovies);
    }
    const btn=e.currentTarget;
    const parent=btn.parent;
    const imgURL=parent.querySelector('img').getAttribute('src'); 
    const title=parent.querySelector('h5').innerText;
    const overview=parent.querySelector('p').innerText;
    const movieData={
      imgURL,title,overview,
      id:btn.dataset.movieID
    }
    let movieIsInArray= tempMovieInFavs.filter(oneMovie=>{
      return oneMovie.id===movieData.id;
    })
    if(!movieIsInArray){
      tempMovieInFavs.push(movieData);
      localStorage.setItem('favs',JSON.stringify(tempMovieInFavs));
      setFavorites(tempMovieInFavs);
      console.log('Se agregó la peli');
    }else {
      let moviesLeft = tempMovieInFavs.filter(oneMovie=>{
        return oneMovie.id!==movieData.id;
      });
      localStorage.setItem('favs',JSON.stringify(moviesLeft));
      setFavorites(tempMovieInFavs);
      console.log("se elimino la duplicada");
    }
  }
  return(
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/listado" render={(props)=> <Listado addOrRemoveFromAvs={addOrRemoveFromAvs} {...props} />} />
      <Route path="/detalle" element={<Detalle/>} />
      <Route path="/resultados" element={<Resultados/>} />
      <Route path="/favoritos" render={(props)=> <Favoritos addOrRemoveFromAvs={addOrRemoveFromAvs} {...props} />} />
    </Routes>
    <Footer/>
    </>
  );
  
}

export default App;
