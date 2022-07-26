import React, { useState, useRef } from "react";
import "./contacto.css";
import { saveContact } from "../../App";

const ContactForm = ( {mostrar, handle}) => {
  const [formState, setFormState] = useState({
    name: "",
    lastName: "",
    telephone: "",
  });

  const handleClick = (e) => {
    handle(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nombre: e.currentTarget.name.value,
      apellido: e.currentTarget.lastName.value,
      telefono: e.currentTarget.telephone.value,
    };

    const contact = await saveContact(data);
    setFormState(contact);
  };

  return (
    <div className={`${mostrar ? "" : "spread" } overlay`}>
      <div className="overlay-container">
        <div className="contact-form-div">
          <div className="form-header">
            <h1 className="form-title">Agregar Contacto</h1>
            <button class="cerrar" onClick={handleClick}>
              cerrar 
            </button>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
              <input id="nombre" type="text" name="name" placeholder="Nombre" required />
              <input id="apellido" type="text" name="lastName" placeholder="apellido"  required />
              <input id="telefono" type="tel" placeholder="Telefono" name="telephone" required />
            <input type="submit" id="btnGuadar" class="btnGuardar" value="AGREGAR" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
