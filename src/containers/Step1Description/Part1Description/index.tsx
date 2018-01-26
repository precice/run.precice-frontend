import * as React from 'react';
import * as styles from '../styles.scss';
import * as geometry from '../../../static/geometry.png';

interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>introduction</div>
        <div className={styles.tuInContent}>
          In this tutorial we will show you how to perform coupled fluid-structure
          interaction (FSI) simulations with preCICE. preCICE is a coupling library for partitioned multi-physics simulations
          and is meant to couple existing solvers using a minimally invasive approach. The two solvers we will use are SU2
          and CalculiX. We have split the tutorial into multiple parts. In each part, you will run a separate coupled
          simulation using a particular configuration.
          <br/>
          <br/>
            The simulations we will be running model a fluid flowing through a channel.
            A solid, elastic flap is fixed to the floor of this channel.
            The flap oscillates due to the build up of fluid pressure on its surface.
            The setup is schematically shown here:
          <br/>
          <br/>

          <img src={geometry} className={styles.img}/>
          <br/>
            The flow is driven by a prescribed pressure difference from the inlet on the left to the outlet on the right.
            We set Euler boundary conditions on the walls of the channel and the surface of the flap,.
            The fluid flow is simulated by solving the Euler equations with SU2.
            We use the Finite Element solver CalculiX to calculate the displacement of the flap. Since SU2 and CalculiX
            will be running independently, we will use preCICE for equation coupling and transferring data, fluid forces and
            structure displacement, between the two solvers in such a way that our coupled simulation not only converges but is also fast.
            Please note that while the test case is two-dimensional, we actually run
            a quasi-2D simulation since CalculiX only deals with three-dimensional problems.
          <br/><br/>
        </div>

      </div>
    );
  }
}

export default Part1Sub;

