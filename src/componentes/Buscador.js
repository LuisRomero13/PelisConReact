// import useHistory from 'react-router-dom';

function Buscador(){
    const submitHandler=e=>{
        e.preventDefault();
        const keyword=e.currentTarget.keyword.value.trim();
        if(keyword.lenght===0){
            console.log("tienes q escribir una palabra clave");
        } else if(keyword.lenght<4){
            console.log("Tienes q escribir mas de 3 caracteres");
        } else {
            e.currentTarget.keyword.value='';
            // history.push(`/resultados?palabra-clave=${keyword}`);
        }
    }
    return(
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
            <label className="form-label mb0 mx-2">
                <input className="form-control" type="text" name="keyword" placeholder="escribe una palabra clace.." />
            </label>
            <button className="btn btn-success" type="submit">Buscar</button>
        </form>
    )
}

export default Buscador;