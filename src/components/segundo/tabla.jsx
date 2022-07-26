import "./estilotabla.css";
import React, { useState, useEffect } from "react";
import ContactItem from "./objetos";

const ContactList = () => {
  const [data, setData] = useState([]);
  const ENDPOINT_URL = "http://www.raydelto.org/agenda.php";

  const loadData = async () => {
    try {
      const data = await fetch(ENDPOINT_URL);
      const response = await data.json();
      setData(response);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="tbl-header">
    <table cellPadding="0" cellSpacing="0" border="0">
    <thead>
      <tr>
  <th>Nombre</th>
    <th>Apellido</th>
      <th>Teléfono</th>
        </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        {data.length && data.map((item) => <ContactItem contact={item} />)}
      </div>
    </>
  );
};

export default ContactList;
