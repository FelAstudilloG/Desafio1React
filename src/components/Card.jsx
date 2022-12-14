import React from 'react';
import './card.css'   
function Card({ img, titulo, descripcion }) {
    return (
        <div className='card-total'>        
            <div className='card-contenedor'>
                <div className='image-contenedor'>
                    <img className='image' src={img} alt='' />
                </div>
                <div className='card-contenido'  >
                    <div className='card-titulo'>
                        <h4 className='bajada'>{titulo}</h4>
                    </div>
                    <div className='card-descripcion' >
                        <h4 className='desarrollo'>{descripcion}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;