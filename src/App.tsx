import './App.css'
import { useState } from 'react'

// Importar módulos de Database
import appFirebase from "../src/credenciales"
import {getAuth, onAuthStateChanged} from "firebase/auth"
const auth = getAuth(appFirebase)

// Importar Componentes
import Home from '../src/components/Home'
import Login from '../src/components/Login'


function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })

  return (
    <>
      {usuario ? <Home correoUsuario = {usuario.email} /> : <Login />}
    </>
  )
}

export default App
