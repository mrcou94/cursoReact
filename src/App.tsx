//import { TiposBasicos } from "./typescript/TiposBasicos";
// import { Funciones } from './typescript/Funciones';
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';

import { Formularios } from "./components/Formularios";
import { Usuarios } from "./components/Usuarios";

//import { Contador } from "./components/Contador";
//import { ContadorConHook } from "./components/ContadorConHook";
//import { Login } from "./components/Login";

const App = () => {
  return (
    <div className='mt-w'>
      <h1>Introducción a TypeScript React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones/> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
  )
}

export default App;