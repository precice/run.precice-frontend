import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        preCICE is set up through an xml configuration file. It contains most of the settings preCICE needs to run the
        coupled simulation. We still need solver specific configuration files that we will not discuss in this tutorial.
        <br/>
        <br/>
        For the first simulation, we will couple SU2 and CalculiX using an explicit coupling scheme and set the maximum
        number of timesteps to twenty. This fact will become significant as you go through the tutorial.
        Below, you can find the configuration file that we will use to achieve this. We have split the
        file into sections. For each section, we provide details on the tags and why we need to use them.
      </div>
    );
  }
}

export default Part1Sub;

