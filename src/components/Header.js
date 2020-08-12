import React from 'react';

const Header = props => {
  return (
    <div class="hero is-medium is-primary is-bold">
      <figure className="image is-5by3">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2 class="title">{props.car.name}</h2>
      <p class="subtitle">Amount: ${props.car.price}</p>
    </div>
  );
};

export default Header;
