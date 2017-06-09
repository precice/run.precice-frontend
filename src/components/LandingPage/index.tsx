import * as React from "react";
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

export interface landingPageProps {
}

class LandingPage extends React.Component<landingPageProps, undefined> {
  render() {
    return<body className={styles.container}>
    <header role="banner" className={styles.banner}><span className={styles.pre}>pre</span>CICE - LandingPage</header>
    <div className={styles.small}>
      <div className={styles.intro}>Coupling tool for partitioned simulations<br></br>of multi-physics scenarios.</div>
      <div className={styles.sub_intro}>Make Coupling Easy Again</div>
      <div className={styles.Btn_container}><Link to="/example" className={styles.Btn}> Start Now</Link></div>
    </div>
    <footer className={styles.footer}>Copyright &copy; <span className={styles.pre}>pre</span>CICE</footer>
    </body>;
  }
}

export default LandingPage;
