import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: 30px 200px;
`;

export const Register = ({ handleRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [mainPhone, setMainPhone] = useState("");
  const [dni, setDni] = useState("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        handleRegister("user", { firstName, lastName, username, mainPhone, dni });
      }}
    >
      <div className="form-group">
        <label htmlFor="firstName">Nombre {firstName}</label>
        <input type="text" className="form-control" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <small id="firstName" className="form-text text-muted">
          Nombre del propietario principal.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellidos {lastName}</label>
        <input type="text" className="form-control" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
        <small id="lastName" className="form-text text-muted">
          Apellidos del propietario principal.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="username">Email {username}</label>
        <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <small id="username" className="form-text text-muted">
          Recibirá en esta dirección un enlace para establecer su contraseña y acceder a su perfil.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="mainPhone">Teléfono de contacto {mainPhone}</label>
        <input type="tel" className="form-control" id="mainPhone" value={mainPhone} onChange={e => setMainPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="dni">DNI {dni}</label>
        <input type="text" className="form-control" id="dni" value={emergencyPhone} onChange={e => setDni(e.target.value)} />
      </div>

      <button type="submit" className="btn btn-primary">
        Registrar Cliente
      </button>
    </Form>
  );
};
