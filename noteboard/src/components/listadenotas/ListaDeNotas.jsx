import React, {Component} from 'react';
import { CardNota } from '../card-nota/CardNota';

class ListadeNotas extends Component{
        render() { 
            return(

            <ul>
                    <li>
                    <CardNota />
                    </li>
                    <li>
                    <CardNota />
                    </li>
                    <li>
                    <CardNota />
                    </li>
            </ul>

            )};
}

export default ListadeNotas;
