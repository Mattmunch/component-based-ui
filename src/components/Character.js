import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class Character extends Component {
    static propTypes = {
      image:PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status:PropTypes.string.isRequired,
      species:PropTypes.string.isRequired,
      gender:PropTypes.string.isRequired,
      origin:PropTypes.string.isRequired,
      lastLocation:PropTypes.string.isRequired
    }

    render() {
      const { image, name, status, species, gender, origin, lastLocation } = this.props;
      return (
        <>
          <article className={styles.characterCardWrapper}>
            <div data="card header" className={styles.characterCardImgWrapper}>
              <div className="card-image">
                <img src={image}>
                </img>
              </div>
              <div className="characterCard__Title">
                <h2 className="characterCard__Name">
                  {name}
                </h2>
              </div>
            </div>
            <div data="card info" className={styles.characterCardInfoWrapper}>
              <div className="characterCard__TextWrapper">
                <span>STATUS</span>
                <p>
                  {status}
                </p>
              </div>
              <div className="characterCard__TextWrapper">
                <span>SPECIES</span>
                <p>
                  {species}
                </p>
              </div>
              <div className="characterCard__TextWrapper">
                <span>GENDER</span>
                <p>
                  {gender}
                </p>
              </div>
              <div className="characterCard__TextWrapper">
                <span>ORIGIN</span>
                <p>
                  {origin}
                </p>
              </div>
              <div className="characterCard__TextWrapper">
                <span>LAST LOCATION</span>
                <p>
                  {lastLocation}
                </p>
              </div>
            </div>
          </article>  
        </>
      );
    }
}
