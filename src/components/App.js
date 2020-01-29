import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Character from './Character.js';
import dipperImg from '../assets/dipper-mabel.jpeg';
import booby from '../assets/booby-buyer.jpeg';
import evil from '../assets/evil-summer.jpeg';
import jerryboree from '../assets/jerryboree.jpeg';
import loggins from '../assets/loggins.jpeg';
import melissa from '../assets/melissa.jpeg';
import pancakes from '../assets/pancakes.jpeg';
import ruben from '../assets/ruben.jpeg';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className={styles.characterList}>
          <section className={styles.row}>
            <Character image={dipperImg} name='Dipper and Mabel Mortys' status= 'unknown' species='Human' gender='unknown' origin='unknown' lastLocation='Citadel of Ricks'></Character>
            <Character image={evil} name='Evil Summer Clone' status= 'Dead' species='Human, Clone' gender='Female' origin='unknown' lastLocation='Earth (C-137)'></Character>
            <Character image={loggins} name='Loggins' status= 'Alive' species='Alian, Alligator-Person' gender='male' origin='unknown' lastLocation='Interdimensional Cable'></Character>
            <Character image={melissa} name='Melissa' status= 'Alive' species='Humanoid, Monster' gender='Female' origin="Mr. Goldenfold's dream" lastLocation="Mr. Goldenfold's dream"></Character>
          </section>
          <section className={styles.row}>
            <Character image={booby} name='Mr. Booby Buyer' status= 'Alive' species='Animal, Boobie buyer reptilian' gender='male' origin='Fantasy World' lastLocation='Fantasy World'></Character>
            <Character image={pancakes} name='Mrs. Pancakes' status= 'Alive' species='Human' gender='Female' origin='Earth (C-137)' lastLocation="Mr. Goldenfold's dream"></Character>
            <Character image={ruben} name='Ruben' status= 'Dead' species='Human' gender='Male' origin='Earth (C-137)' lastLocation='Earth (C-137)'></Character>
            <Character image={jerryboree} name='Jerryboree Receptionist' status= 'Alive' species='Alien' gender='Male' origin='unknown' lastLocation='Jerryboree'></Character>
          </section>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
