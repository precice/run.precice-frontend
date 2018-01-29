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
        the coupling scheme can affect whether the simulation converges or not. We will play around with this section in
        the course of the tutorial.
        <br/><br/>
        <li>
          <span className={styles.highlight}>coupling-scheme</span>: Here we use the <span className={styles.highlight}> serial-explicit </span>
          coupling scheme.<span className={styles.highlight}> Serial </span>  refers to the fact that the two solvers operate serially with
          respect to each other - one waits for the other to finish its time step.<span className={styles.highlight}> Explicit </span>
          means that we let every solver compute once and then move on to the next timestep.
          <Tooltip
            width="100"
            interactive
            html={(
              <div>
                A<span className={styles.highlight}> parallel </span>coupling-scheme would allow simultaneous
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
          <span className={styles.highlight}>participants</span>: This defines the coupled participants.
          The attribute "first" names the participant that leads the coupling.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>max-timesteps value</span>: Here we specify the maximum number of timesteps.
          We will terminate our first simulation after only twenty timesteps.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>timestep-length value</span>: Maximum allowed length of a coupling timestep.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>exchange</span>: As discussed before, we mapped data between SU2 and
          CalculiX. We need to exchange this data through a mesh between the two participants. Please note that both
          participants must use the same mesh.
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
          <span className={styles.highlight}>exchange data</span>: Dataset to be exchanged.
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

/* This stuff is not in the xml file but it was in the explanation above.

 <br/>
 <li>
 <span className={styles.highlight}>relative-convergence-measure</span>: We further set convergence measures for the data sets, after which the implicit sub-iterations will be stopped.
 <Tooltip
 trigger="click"
 width="100"
 interactive
 html={(
 <div>
 <span className={styles.highlight}>relative-convergence-measure</span> simply means that convergence is achieved if <span className={styles.highlight}>|data - oldData|{'<'} limit * |data|</span>,
 where all norms are L2 norms. The expression on the right-hand side is referred to as <span className={styles.highlight}>relative limit</span> in the preCICE logging output.
 </div>
 )}
 >
 <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
 </Tooltip>
 </li>
 <br/>
 <li>
 <span className={styles.highlight}>data</span>: Dataset to be measured.
 </li>
 <br/>
 <li>
 <span className={styles.highlight}>mesh</span>: Mesh holding the dataset data.
 </li>
 <br/>
 <li>
 <span className={styles.highlight}>limit</span>: Convergence limit.
 </li>
 <br/>
 <li>
 <span className={styles.highlight}>extrapolation-order value</span>: Specifies the number of previous timesteps from which the initial guess for the next timestep is constructed.
 <Tooltip
 trigger="click"
 width="100"
 interactive
 html={(
 <div>
 For example, if <span className={styles.highlight}>value</span> is 2, then a second-order extrapolation of the next timestep's initial guess is done from the current and the previous timestep results.
 </div>
 )}
 >
 <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
 </Tooltip>
 </li>
 <br/>
 <li>
 The implicit coupling is solved via a fixed-point iteration.
 Sometimes the convergence of fixed-point iteration can be slow,
 especially when the interaction between the fluid and the structure is strong due to a high fluid/structure
 density ration or incompressibility of the flow. Therefore, we need some post-processing.
 </li>
 <li>
 <span className={styles.highlight}>post-processing</span>:  In order to improve the convergence rate,
 we use <span className={styles.highlight}>aitken</span> relaxation method which adapts the relaxation
 factor in each iteration based on the previous iterations.
 <Tooltip
 trigger="click"
 width="100"
 interactive
 html={(
 <div>
 For more information about aitken, click <a style={{color: 'white'}}href="http://onlinelibrary.wiley.com/doi/10.1002/nme.1620010306/abstract">here</a>.
 preCICE offers various methods for post-processing.
 For more methods, please refer to <a style={{color: 'white'}}href="https://github.com/precice/precice/wiki/XML-Reference">XML reference</a>.
 </div>
 )}
 >
 <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
 </Tooltip>
 </li>
 <li>
 <span className={styles.highlight}>data name</span>: Name of dataset to be post-processed.
 </li>
 <li>
 <span className={styles.highlight}>mesh</span>: Mesh on which data is located.
 </li>
 <li>
 <span className={styles.highlight}>initial-relaxation value</span>: value for first underrelaxation. 0.2 is a robust choice.
 </li>
 <br/>

 */

