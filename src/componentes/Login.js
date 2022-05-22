// import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Navigate } from "react-router-dom"

function Login(){
        const MySwal = withReactContent(Swal);
        const submitHandler=e=>{
            e.preventDefault();
            const email=e.target.correo.value;
            const password=e.target.contra.value;
            const regexEmail= /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            if(email===''|| password===''){
              console.log('los campos no pueden estar vacíos');
              MySwal.fire({
                  title: <h2>Los campos no pueden estar vacíos</h2>,
                  icon: 'error'
              });
              return;
            }
            if(email!=='' && !regexEmail.test(email)){
              console.log("debes escribir una dirección de correo electrónico válida");
              MySwal.fire({
                title: <h2>Debes escribir una dirección de correo electrónico válida</h2>,
                icon: 'error'
            });
            }

            console.log("ok estamos listos para enviar la informacion");
            MySwal.fire({
                title:<h2>Información correcta</h2>,
                icon:'success'
            })
            /*axios.post('',{email,password}).then(res=>{
                console.log(res.data);
                const tokenRecibido=res.data.token;
                sessionStorage.setItem('token',tokenRecibido);
            })*/
        }
        const token=sessionStorage.getItem('token'); 
          return (
            <>
             {token && <Navigate to="/listado" />}
              <h2>formulario de Inicio de sesión</h2>
              <form onSubmit={submitHandler}>
                <label>
                  Correo electronico:
                  <input type="email" name="correo"/>
                </label>
                <label>
                  Contraseña:
                  <input type="password" name="contra"/>
                </label>
                <button type="submit">Ingresar</button>
              </form>
            </>
          );
}
export default Login;