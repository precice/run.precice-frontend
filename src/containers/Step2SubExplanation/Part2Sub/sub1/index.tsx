import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub1Props {
}

class Sub1 extends React.Component<Sub1Props, any> {
  public render() {
    return (
      <div>
        The solver-interface, as the name implies, defines the interface between the coupled solvers. Here we specify
        the participants, the meshes to be used, and the coupling scheme along with other aspects relevant to the simulation.
        <br/><br/>
        <li>
          <span className={styles.highlight}>solver-interface dimensions</span>
          : This attribute sets the spatial dimensions of the problem to be solved. Recall that we're performing a quasi-2D
          simulation since the actual setup is 3D but we don't make use of the third dimension.
          <Tooltip
            width="100"
            title="While the dimension has been set to 3 here, we are actually performing a quasi-2D simulation. This is so because CalculiX only deals with 3-D problems."
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>data:vector name</span>
          : This defines the datasets to be used for the meshes in the simulation. Here we define data vectors that we will
          transfer between the two solvers.
        </li>
      </div>
    );
  }
}

export default Sub1;

