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
          : This attribute sets the spatial dimensions of the problem to be solved. This is 3 since we're performing a quasi-2D
          simulation.
          <Tooltip
            interactive
            html={(
              <div>
                This could be confusing since the schematic in the introduction is 2D. The constraining factor is
                CalculiX which only deals with 3D problems. The meshes are 3D but we don't make use of the
                third dimension.
              </div>
            )}
            title="mesh_additional"
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>

        </li>

        <br/>
        <li>
          <span className={styles.highlight}>data:vector name</span>
          : This defines the datasets to be used for the meshes in the simulation. Here we define data vectors that we will
          use to transfer between the two solvers.
        </li>
      </div>
    );
  }
}

// Additional info:
// <br/><br/> We can set the name as we like, but should be consist to solver's configuration file.

export default Sub1;

