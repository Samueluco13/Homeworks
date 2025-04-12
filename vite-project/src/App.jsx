import React, { useState, useRef } from 'react'
import {Person, PeopleQueue} from "./Classes/Personas"

export const App = () => {

  const fila = useRef(new PeopleQueue());
  const referencia = useRef(false);

  if (!referencia.current) {
    fila.current.enqueue(new Person("Juan", 1000));
    fila.current.enqueue(new Person("Pedro", 2000));
    fila.current.enqueue(new Person("Maria", 3000));
    fila.current.enqueue(new Person("Jose", 4000));
    referencia.current = true;
  }


  const [personas, setPersonas] = useState(fila.current.getPeople());
  const [persona, setPersona] = useState({
    name: '',
    withdrawal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona(prev => ({ ...prev, [name]: value }));
  };



  const handleAdd = (e) => {
    e.preventDefault();

    const nuevaPersona = new Person(persona.name, persona.withdrawal);
    fila.current.enqueue(nuevaPersona);
    setPersonas([...fila.current.getPeople()]);

    setPersona({
      name: '',
      withdrawal: ''
    });
  }


  return (
    <>
      <div><h1>ATM BANQUI</h1></div>
      <form onSubmit={handleAdd}>
        <input name='name' value={persona.name} onChange={handleChange} type="text" placeholder='Ingrese su nombre' required />
        <input name='withdrawal' value={persona.withdrawal} onChange={handleChange} type="text" placeholder='Monto a retirar' required />
        <button >Agregar persona</button>
      </form>

      <aside>
        <h3>Fila de personas</h3>
        <ul>
          {personas.map((persona, index) => (
            <li key={index}>
              <strong>{persona.name}</strong> - Retiro: {persona.withdrawal}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
