import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the
        coupled simulation. However, we still need solver specific configuration files that we will not discuss in this tutorial.
        <br/>
        <br/>
        You can go through the configuration file below. Click on a highlighted section to get the details.
      </div>
    );
  }
}

export default Part1Sub;

