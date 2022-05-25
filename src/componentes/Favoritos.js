import{useState,useEffect} from "react";

function Favoritos(props){
    // const [favorites,setFavorites]=useState([]);
    // useEffect(() => {
    //     const favsInLocal=localStorage.getItem('favs');
    //     if(favsInLocal!==null){
    //         const favsArray=JSON.parse(favsInLocal);
    //         setFavorites(favsArray);
    //     }
    //     return () => {
            
    //     };
    // }, []);
    return(
        <>
        <h2>Seccion de favoritos</h2>
        <div className="row">
            {
                favorites.map((oneMovie,idx)=>{
                    return(
                        <div className="col-3" key={idx}>
                            {/* pintar tarjeta */}
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Favoritos;