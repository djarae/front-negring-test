import './Login.css';
import axios from "axios";
import {useState} from 'react';
function Login() {


  const [hookTxtUsuario, setHookTxtUsuario] = useState('');
  const [hookTxtContrasena, setHookTxtContrasena] = useState('');

  const handleChangeUsuario = event => {
    setHookTxtUsuario(event.target.value);
    console.log("valor user ");
    console.log(hookTxtUsuario);
  };
  
  const handleChangeContrasena = event => {
    setHookTxtContrasena(event.target.value);
    console.log("valor contr ");
    console.log(hookTxtContrasena);
  };

    function iniciarSesion (){
        localStorage.setItem("usuarioActivo",true)
        localStorage.setItem("nombre","Diego")

        let usuarioAuxiliar =''
        let contrasenaAuxiliar =''

        usuarioAuxiliar=hookTxtUsuario;
        contrasenaAuxiliar=hookTxtContrasena;



        axios.get("http://127.0.0.1:8000/login?nombre='"+usuarioAuxiliar+"'&contrasena='"+contrasenaAuxiliar+"'", { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log("funciona!");
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function (response) {
          console.log("Esto es then");
        });
  
        alert( "Se ha iniciado sesion de:" + localStorage.getItem("nombre") + ". Usuario activo es " +  localStorage.getItem("usuarioActivo"))
        // window.location.href = window.location.href;
        return 0;
      }


    function crearUsuario (){
        axios.get('http://127.0.0.1:8000/login', { withCredentials: true })
        .then(function (response) {
            // handle success
            console.log("funciona!");
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

        return 0;
      }  

    return (
      <div className="App">
        <header className="App-header">
         <div >
          <h1>
           !Bienvenidos a Negring!
          </h1>
          <p>
           Desarrolla esta plataforma a la perfeccion
          </p>
         </div >
        </header>
        <body className="App-body">
         <h1>
          Iniciar sesion
         </h1>
       <div>
        <input
          type="text"
          id="txtUsuario"
          name="hookTxtUsuario"
          onChange={handleChangeUsuario}
          value={hookTxtUsuario}
        />
        <h2>Message: {hookTxtUsuario}</h2>
      </div>


      <div>
        <input
          type="text"
          id="txtContrasena"
          name="hookTxtContrasena"
          onChange={handleChangeContrasena}
          value={hookTxtContrasena}
        />
        <h2>Message: {hookTxtContrasena}</h2>
      </div>





         <button onClick={iniciarSesion}>
            Ingresar 
         </button>
         <button onClick={crearUsuario}>
            Crear Usuario 
         </button>
        </body>
      </div>
    );
  }
  export default Login;
  