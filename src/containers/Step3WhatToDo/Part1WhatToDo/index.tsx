import * as React from 'react';
import * as styles from '../styles.scss';


interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        After the setup is complete, we are ready to run the coupled simulation. We need to start two terminals,
        one for each solver that we use.
        <br/>
        In each terminal we start a simulation, the order in which they are started is not important.
        The solver we start first will run until it needs to communicate with the other one and wait until it
        receives the required data.
        <br/>
        For CalculiX, type in command:
        <p className={styles.expCommand}>
          ccx_preCICE -i flap -precice-participant Calculix
        </p>
        For SU2, type in command:
        <p className={styles.expCommand}>
          SU2_CFD euler_config_coupled.cfg
        </p>
      </div>
    );
  }
}

export default Part1Sub;

