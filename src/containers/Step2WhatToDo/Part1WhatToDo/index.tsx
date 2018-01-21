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
        This is the preCICE configuration file that we will use to run our first coupled simulation. We have split the
        file up into sections. For each section, we provide details on the tags and why we need to use them.
        Click on a highlighted section to get the details.
      </div>
    );
  }
}

export default Part1Sub;

