import * as React from "react";
import { Link } from 'react-router-dom';

export interface landingPageProps {
}

class LandingPage extends React.Component<landingPageProps, undefined> {
  render() {
    return <div>Landing Page! <Link to="/example"> Link to Example</Link></div>;
  }
}

export default LandingPage;
