import React from 'react';

const Character = ({ character }) => {
  const { image, name, gender, status, type, species } = character;
  return (
    <div className="character-container">
      <div className="character-card">
        <img src={image} alt="profile-pic" />
        <div className="info">
          <p>
            <span>Name: </span>
            {name}
          </p>
          <p>
            <span>Gender: </span>
            {gender}
          </p>
          <p>
            <span>Status: </span>
            {status}
          </p>
          <p>
            <span>Type: </span>
            {type ? type : 'Unknown'}
          </p>
          <p>
            <span>Specie(s): </span>
            {species}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
