import {Navigate} from 'react-router-dom';
import{useEffect,useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

function Listado(){
    const MySwal2 = withReactContent(Swal);
     let token=sessionStorage.getItem('token'); 
     const [moviesList,setMoviesList]=useState([]);
     useEffect(() => {
         const endpoint= '';
         axios.get(endpoint)
            .then(resp=>{
                const apiData=resp.data;
                setMoviesList(apiData.results);
            })
            .catch(e=>{
                console.log(e);
                MySwal2.fire({
                    title: <h2>Hubo errores, intenta más tarde</h2>,
                    icon: 'error'
                });
            })
         
     }, [setMoviesList,MySwal2]);


    return(
        <>
        {!token && <Navigate to="/" />}
        <div className='row'>
            {
                moviesList.map((oneMovie,idx)=>{
                    return(
                        <>
                        <div className='col-3' key={idx}>Peli 1</div>
                        <button className='favourite-btn' onClick={props.addOrRemoveFromFavs}>insertar emoji</button>
                     {/* Aqui las tarjetas de bootstrap(es un ejemplo de peliculas)  */}
                     {/* Query string es toda aquella información valiosa que enviamos en la URL. */}
                        <Link to={`detalle?movieID=${oneMovie.id}`} className='btn btn-primary' data-movie-id={oneMovie.id}>Ver detalle</Link>
                        </>
                        // averiguar atributos data
                    )
                })
            };
            
        </div>
        </>
        
    )
}

export default Listado;