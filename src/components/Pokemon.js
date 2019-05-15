import React from 'react';

class Pokemon extends React.Component {
  render(){
    const {url, name, types} = this.props;
    
    return(
      <div className="item__container">
        <img src={url} alt={name}/>
        <h2 className="pok__name">{name}</h2>
        <ul className="pok__types">
          {types.map((type, indexType) => {
            return(
              <li className="type__item" key={indexType}>
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Pokemon;