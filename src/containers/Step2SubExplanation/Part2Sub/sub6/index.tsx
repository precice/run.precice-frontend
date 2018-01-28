import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub6Props {
}

class Sub6 extends React.Component<Sub6Props, any> {
  public render() {
    return (
      <div>
        Before we go ahead and run the simulation, we need to configure one last thing: the coupling scheme. As you can imagine,
        the coupling scheme can have affect whether the simulation converges or not.
        <br/><br/>
        <li>
          <span className={styles.highlight}>coupling-scheme</span>: Here we use the <span className={styles.highlight}>serial-explicit</span>
          coupling scheme.<span className={styles.highlight}> Serial</span> refers to the fact that the two solvers operate serially with
          respect to each other - one waits for the other to finish its timestep.<span className={styles.highlight}>Explicit </span>
          means that we let every solver compute once and then move on to the next timestep.
          <Tooltip
            width="100"
            interactive
            html={(
              <div>
                A <span className={styles.highlight}>parallel</span> coupling-scheme would allow simultaneous
                computation. An <span className={styles.highlight}> implicit </span> scheme would have meant that
                we sub-iterate between both solvers in every timestep until convergence.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>participants</span>: The "participants" tag defines the coupled participants.
          The attribute "first" names the participant that leads the coupling.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>max-timesteps value</span>: This is the maximum number of
          time steps that we will perform in our simulation. Here we are performing a maximum of fifty time steps
          in the hope that we'll see the flap oscillate.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>timestep-length value</span>: Maximum allowed length of a coupling timestep.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>max-iterations value</span>: Maximum number of implicit sub-iterations.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange</span>: As discussed before, we mapped data between SU2 and
          CalculiX. We need to exchange this data through a mesh between the two participants. Please note that both
          participants must use the mesh with use-mesh.
          <Tooltip
            width="100"
            interactive
            html={(
              <div>
                Recall that in the participant <span className={styles.highlight}>SU2_CFD</span> we mapped
                <span className={styles.highlight}> DisplacementDeltas0</span> from and <span className={styles.highlight}> Forces0 </span>
                to the mesh <span className={styles.highlight}>Calculix_Mesh</span>.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange data</span>: Dataset to be exchanged..
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange mesh</span>: Name of the mesh through which data is exchanged.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange from</span>: Source participant.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange to</span>: Destination participant.
        </li>

      </div>
    );
  }
}

export default Sub6;
