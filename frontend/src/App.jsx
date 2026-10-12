
import { Routes,Route } from 'react-router-dom'
import { RegistroDatos } from './pages/RegistroDatos'
import { Instrucciones } from './pages/Instrucciones'
import { Examen } from './pages/Examen'
import { Admin } from './pages/admin'


function App() {
  
  return (
    <Routes>
      <Route path="/" element={ <RegistroDatos/>}/>   
      <Route path='instrucciones' element={<Instrucciones/>} /> 
      <Route path='examen' element={<Examen/>}/>
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  )
}

export default App



