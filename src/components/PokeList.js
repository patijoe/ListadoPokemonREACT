import React from 'react';
import './Pokemon';
import './PokeList.css';

class PokeList extends React.Component {

  render() {
    const {pokemon} = this.props;

    return(
      <ul className="card__list">
          {pokemon.map(pok => {
            return(
              <li className="pok__item" key={pok.id}>
                <Pokemon 
                  url = {pok.url}
                  name = {pok.name}
                  types = {pok.types}
                />
              </li> 
            );
          })
          }
        </ul>
    );
  }
}
export default PokeList;