import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';


class LandingPage extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className={styles.container}>
        <header role="banner" className={styles.banner}><span className={styles.pre}>pre</span>CICE - LandingPage
        </header>
        <div className={styles.small}>
          <div className={styles.intro}>Coupling tool for partitioned simulations<br />of multi-physics scenarios.
          </div>
          <div className={styles.subIntro}>Make Coupling Easy Again</div>
          <div className={styles.btnContainer}><Link to="/example" className={styles.btn}> Start Now</Link></div>
        </div>
        <footer className={styles.footer}>Copyright &copy; <span className={styles.pre}>pre</span>CICE</footer>
      </div>
    );
  }
}

export default LandingPage;
