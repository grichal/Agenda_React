import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <tr className="contactList-item">
      <td className="name">{contact.nombre}</td>
      <td>{contact.apellido}</td>
      <td>{contact.telefono}</td>
    </tr>
  );
};

export default ContactItem;
