import{useEffect,useState} from 'react';
import {Navigate} from 'react-router-dom';

function Detalle(){
    let token=sessionStorage.getItem('token');
    // URLSearchParams retorna un objeto a través del cual podemos acceder a los distintos valores enviados en el query string.
    let query=new URLSearchParams(window.location.search);
    let movieID=query.get('movieID');
    const [movie,setMovie]=useState(null);

    useEffect(() => {
        console.log(movieID);
        return () => {
            
        };
    }, [movieID]);

    return(
        <>
            {!token && <Navigate to="/" />}
            {/* short circuit render(renderizado condicional) */}
            {!movie && 
                <p>Cargando...</p>
            }
            {movie && 
            <>
            <h2>Detalle de la película {movie.title}</h2>
            <div className='row'>
                <div className='col4'>
                    imagen
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno:</h5>
                </div>
            {/* Si se quiere renderizar objetos en vez de strings,hay q utilizar la funcion map */}
            <ul> {movie.genres.map(oneGenre=>{
                <li key={oneGenre.id}> {oneGenre.name} </li>
            }) } </ul>
            </div>
            </>
            }
        </>
    )
}

export default Detalle;