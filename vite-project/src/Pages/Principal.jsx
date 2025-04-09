import React from 'react';
import {Link} from 'react-router-dom';

const Principal = () => {
    const news = [
        {
            id: 1,
            title: 'El crimen de Sara Millerey',
            content: 'Mujer transgénero, que fue brutalmente torturada al partirle todas sus extremidades y arrojarla al caudal de una quebrada, conmovió a todo el país.'
        },
        {
            id: 2,
            title: '“Estoy pensando en no volver”',
            content: 'Carlos Antonio Vélez dio visibilidad a una situación que se presentó luego del empate amargo contra Paraguay en eliminatorias.'
        },
        {
            id: 3,
            title: 'Las siete profesiones que la inteligencia artificial no podrá reemplazar, según Bill Gates',
            content: 'Existen numerosas áreas profesionales en las que la IA difícilmente podrá reemplazar el criterio humano, dada la complejidad y la sensibilidad que requieren ciertas decisiones.'
        },
    ];

    return (
        <div>
            <h1>El Chismosillo</h1>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Principal;