import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import * as geometry from '../../static/geometry.png';

interface Step1Props {
}

class Step1 extends React.Component<Step1Props, undefined> {

  public render() {
    return (
      <div className={styles.tuInContainer}>
        <header className={styles.tuInHeader}>introduction</header>
        <li className={styles.tuInContent}>
          In this tutorial, we will tutor you how to do a coupled fluid-structure
          interaction (FSI) simulation step by step with some interaction.
          <div><br/>We model a fluid flowing through a channel.
            A solid, elastic flap is fixed to the floor of this channel.
            This flap oscillates due to the fluid pressure building up on its surface.
            The setup is shown schematically here:</div><br/>
          <img src={geometry} className={styles.img}/><br/>
          <div>This test case is two-dimensional, but because CalculiX is written for three-dimensional simulations,
            we run a quasi-2D simulation with three dimensional meshes with only one cell in y-direction.
            The fluid flow is simulated by solving the Euler equations with SU2,
            and for the displacement of the flap we use the Finite Element solver CalculiX.
            The flow is driven by a prescribed pressure difference from the inlet on the left to the outlet on the right.
            On the walls and the surface of the flap Euler boundary conditions are set.
          </div>
        </li>
        <li className={styles.tuInContent}>We use two solvers: SU2 and CalculiX.
          <ul>
            <li>
              <a href="http://www.calculix.de" className={styles.link}>CalculiX</a>
              : a free three-dimensional finite element solver. We use it to simulate the flap deformation</li>
            <li>
              <a href="http://su2.stanford.edu" className={styles.link}>SU2</a>
              : an open source CFD solver developed at Stanford. We use it to simulate the fluid flow.</li>
          </ul>
        </li>
        <li className={styles.tuInContent}>The role of preCICE is to couple those two solvers.</li>
        <br/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
)(Step1);
