import * as React from "react";
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

export interface landingPageProps {
}

class LandingPage extends React.Component<landingPageProps, undefined> {
  render() {
    return <div>Landing Page! <Link to="/example" className={styles.warnBg}> Link to Example</Link></div>;
  }
}

export default LandingPage;
