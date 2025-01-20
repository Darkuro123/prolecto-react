import { useEffect, useState } from "react";
import axios from "axios"

function App() {

  //const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setcriptos] = useState();

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets`)
      .then(data => {
        setcriptos(data.data.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }, []);

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptos</h1>

      <ol>
        {criptos.map(({ name, priceUsd }) => (
          <li key={name}>Nombre: {name} Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
