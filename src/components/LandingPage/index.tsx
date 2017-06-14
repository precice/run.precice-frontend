import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';


class LandingPage extends React.Component<{}, undefined> {
  render() {
    return <div className={styles.LandingPage}>
      <div className={styles.intro}>Coupling tool for partitioned simulations<br />of multi-physics scenarios.</div>
      <div className={styles.subIntro}>Make Coupling Easy Again</div>
      <div className={styles.Btn_container}><Link to="/tutorial/step1" className={styles.Btn}> Start Now</Link></div>
    </div>
  }
}

export default LandingPage;
