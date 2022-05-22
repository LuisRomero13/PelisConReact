import{useEffect} from 'react';
import {Navigate} from 'react-router-dom';

function Detalle(){
    let token=sessionStorage.getItem('token');
    let query=new URLSearchParams(window.location.search);
    let movieID=query.get('movieID');

    useEffect(() => {
        console.log(movieID);
        return () => {
            
        };
    }, [movieID]);
    return(
        <>
            {!token && <Navigate to="/" />}
            <h2>Detalle de la película</h2>
            <div className='row'>
                <div className='col4'>
                    imagen
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno:</h5>
                </div>
            </div>
        </>
    )
}

export default Detalle;