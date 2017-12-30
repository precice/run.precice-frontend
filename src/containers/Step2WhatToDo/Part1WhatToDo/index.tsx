import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the
        coupled simulation. However, we still need solvers specific configuartion file, that we will not discuss in this tutorial.
        <br/>
        Click on the XML file, you will learn how to set up the configuration file.
      </div>
    );
  }
}

export default Part1Sub;

