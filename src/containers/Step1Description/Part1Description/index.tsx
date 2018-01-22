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
          In this tutorial we will show you how to perform a coupled fluid-structure
          interaction (FSI) simulation with preCICE. preCICE is a coupling library for partitioned multi-physics simulations
          and is meant to couple existing solvers using a minimally invasive approach. The two solvers we will use are SU2
          and CalculiX.
          <br/>
          <br/>
            The simulation we will be running models a fluid flowing through a channel.
            A solid, elastic flap is fixed to the floor of this channel.
            The flap oscillates due to the build up of fluid pressure on its surface.
            The setup is schematically shown here:
          <br/>
          <br/>

          <img src={geometry} className={styles.img}/>
          <br/>
            The flow is driven by a prescribed pressure difference from the inlet on the left to the outlet on the right.
            On the walls and the surface of the flap,we set Euler boundary conditions.
            The fluid flow is simulated by solving the Euler equations with SU2.
            We use the Finite Element solver CalculiX to calculate the displacement of the flap. preCICE acts as a bridge
            between the two solvers and allows us to transfer data between SU2 and CalculiX.
          <br/><br/>
            While the test case is two-dimensional, we actually run a quasi-2D simulation since CalculiX only deals with
            three-dimensional problems. Therefore we have three dimensional meshes with only one cell in the y-direction.
        </div>

      </div>
    );
  }
}

export default Part1Sub;

