import React, { useState } from "react";
import BarraMenu from "./components/BarraMenu/BarraMenu";
import { Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicio/Inicio";
import Pie from "./components/Pie/Pie";
import PaqueteInfo from "./components/PaqueteInfo/PaqueteInfo";

const App = () => {

  const [mostrarPopupPaquete, setMostrarPopupPaquete] = useState(false);
  const [nombrePaquete, setNombrePaquete] = useState("");

  return (
    <>
      {mostrarPopupPaquete?<PaqueteInfo setMostrarPopupPaquete={setMostrarPopupPaquete} nombrePaquete={nombrePaquete} mostrarPopupPaquete={mostrarPopupPaquete}/>:<></>}
      <div className="app">
        
        <Routes>
          <Route path="/" element={<Inicio setMostrarPopupPaquete={setMostrarPopupPaquete} setNombrePaquete={setNombrePaquete} />} />
        </Routes>
      </div>
      <Pie/>
    </>
  );
};

export default App;
