import React, {Component} from 'react';
import { CardNota } from '../card-nota/CardNota';
import './styled.css';

class ListadeNotas extends Component{
        render() { 
            return(

            <ul className="lista-notas">
                {Array.of("Trabalho","Trabalho","Estudo").map((categoria, index)=>{
                    return(
                    <li className="lista-notas_item" key={index}>
                    <CardNota />
                    </li>
                    );
                })}

                    
            </ul>

            );
        }
}

export default ListadeNotas;
