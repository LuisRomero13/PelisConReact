import { useEffect,useState } from "react";
import axios, { Axios } from "axios";

function Resultados(){
    let query= URLSearchParams(window.location.search);
    let keyword=query.get('keyword');
    const [moviesResults,setMoviesResults]=useState([]);
    useEffect(() => {
        const endPoint=`https://sadasd.asdasd/query=${keyword}`;
        axios.get(endPoint).then(resp=>{
          const moviesArray=resp.data.results;
          console.log(moviesArray);  
          if(moviesArray.length===0){
              console.log("tu busqueda no arrojo resultados");
          }
        }).catch(error=>{
            console.log(error);
        })

        return () => {
            
        };
    }, [keyword]);
    return(
        <>
        <h2>Buscaste: <em>{keyword}</em></h2>
        {moviesResults.length===0 && <h3>No hay resultados</h3>};
        <div className="row">
            {
                moviesResults.map((oneMovie,idx)=>{
                    return(
                        <div key={idx}></div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Resultados;