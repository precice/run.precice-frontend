import * as React from "react";
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

export interface landingPageProps {
}

class LandingPage extends React.Component<landingPageProps, undefined> {
  render() {
    return <div>Landing Page! <Link to="/example" className={styles.warnBg}> Link to <span className={styles.important}>Example</span> </Link><span className={styles.important}>Example</span> </div>;
  }
}

export default LandingPage;
