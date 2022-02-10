import React from 'react';

const Mensagem = (props) => {
    return (
        <div>
            {props.lista.map((item) => {
                return (
                    <div className='card' key={item.id}>
                        <h3>{item.titulo}</h3>
                        <hr />
                        <p>{item.mensagem}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Mensagem;