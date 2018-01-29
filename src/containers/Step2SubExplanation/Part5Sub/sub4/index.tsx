import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  public render() {
    return (
      <div>
        Here we declare the second participant in our coupled simulation, CalculiX. We use similar settings here as for SU2 and
        therefore do not go over them again.
        <br/><br/>
        <li>
          <span className={styles.highlight}>watch-point</span>: A watch point can be used to follow the transient
          changes of data and mesh vertex coordinates at a given point. Here we set a watch point on the CalculiX mesh
          at the top of the flap. preCICE will then write the mesh displacement at the watch point to a file in each time step.
        </li>
      </div>
    );
  }
}

export default Sub4;

