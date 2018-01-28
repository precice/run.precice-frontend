import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  public render() {
    return (
      <div>
        Here we declare the second participant, CalculiX, in our coupled simulation. We use same tags as for SU2 and therefore
        don't need to go over them again.
        <br/><br/>
        <li>
          <span className={styles.highlight}>watch-point</span>: A watch point can be used to follow the transient
          changes of data and mesh vertex coordinates at a given point. Here we set a watch point on the CalculiX mesh
          in order to obtain data about coupling iterations which we use to generate a plot.
          Coupling iterations are sub-iterations performed between coupled solvers
          in order to reach a convergent solution.
        </li>
      </div>
    );
  }
}

export default Sub4;

