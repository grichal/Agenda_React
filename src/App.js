import "./Assets/Styles/App.css";
import ContactsForm from "./components/primero/contacto.jsx";
import ContactsLists from "./components/segundo/tabla.jsx";
import { useState } from "react";

function App() {
  const [mostrarForm, setMostrarForm] = useState(false);

  const toogleForm = () => {
    setMostrarForm((mostrarForm) => !mostrarForm)
  };
  return (
    <div className="App">
      <h1>Contactos</h1>
      <div className="optionsbar">
        <button className="agregar" onClick={toogleForm}>
          Nuevo Contacto
        </button>
      </div>
      <ContactsForm  mostrar={mostrarForm} handle={setMostrarForm} />
      <ContactsLists />
    </div>
  );
}
const url = "http://www.raydelto.org/agenda.php";

export const getContacts = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const saveContact = async (props) => {
  const contacto = {
    nombre: props.nombre,
    apellido: props.apellido,
    telefono: props.telefono,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(contacto),
    });
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
export default App;
