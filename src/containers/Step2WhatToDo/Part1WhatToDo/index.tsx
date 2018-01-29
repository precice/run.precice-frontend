import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        preCICE is set up through an xml configuration file. It contains the settings preCICE needs to run the
        coupled simulation. We still need solver specific configuration files that we will not discuss in this tutorial.
        <br/>
        <br/>
        For the first simulation, we will couple SU2 and CalculiX using a serial explicit / conventional staggered
        coupling scheme and set the maximum number of timesteps to twenty. This fact will become significant as you go
        through the tutorial. Below, you can find the configuration file. The file has been split into sections.
        For each section, we have provided details on the respective settings to help you get
        acquainted with preCICE.
        Take your time to click through it.
      </div>
    );
  }
}

export default Part1Sub;

