import {connect} from 'react-redux';
import {EXAMPLE_ACTION, INITIAL_RELAXATION_CHANGE} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';

import * as styles from '../sub6/styles.scss';
import { Tooltip } from 'react-tippy';

import {
  completedTaskSelector} from '../Tutorial/selectors';

import {
  initialRelaxationValueSelector} from '../Step2/selectors';

import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub6Props {
  firstTaskCompleted: boolean;
  initialRelaxationValue: number;
  initialRelaxationChangeAction: any;
}

class Sub6 extends React.Component<Sub6Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        {!this.props.firstTaskCompleted ?
          <div>
        Last, we need to set up the way the two solver couple with each other.
        <br/><br/>
        <li>
          <span className={styles.highlight}>coupling-scheme</span>: Here we use <span className={styles.highlight}>serial-implicit</span>.
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                <span className={styles.highlight}>serial</span> refers to the fact that the two solvers operate serially with respect to each other - one waits for the other to finish its timestep.
                <br/>A <span className={styles.highlight}>parallel</span> coupling-scheme would allow simultaneous computation of both solvers.
                <br/><span className={styles.highlight}>implicit</span> means that we sub-iterate between both solvers in every timestep until convergence.
                <br/>An <span className={styles.highlight}>explicit</span> scheme would let every solver only compute once and then already move on to the next timestep.
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <li>
          <span className={styles.highlight}>first</span>: Name of the first participant(the one who leads the coupling).
        </li>
        <li>
          <span className={styles.highlight}>second</span>: Name of the second participant (the post-processing at the convergence measures are applied at the second participant)
        </li>
        <li>
          <span className={styles.highlight}>max-time value</span>: Total simulation runtime.
        </li>
        <li>
          <span className={styles.highlight}>timestep-length value</span>: Length of the maximum allowed coupling timestep.
        </li>
        <li>
          <span className={styles.highlight}>max-iterations value</span>: Maximum number of implicit sub-iterations.
        </li>
            <li>
            We set the timestep-length and the number of timesteps to be the same as in the SU2 configuration.
            This does not have to be the case. We could, for example, also do the coupling only every second iteration
            by doubling the timestep length.
            </li>
            <br/><br/>
        <li>
          <span className={styles.highlight}>exchange</span>: We also need to exchange data through this mesh between the two participants.
        <Tooltip
          trigger="click"
          width="100"
          interactive
          html={(
            <div>
              Recall that, in the participant <span className={styles.highlight}>SU2_CFD</span>, we had mapped <span className={styles.highlight}>DisplacementDeltas0</span> from and <span className={styles.highlight}>Forces0</span> to the mesh <span className={styles.highlight}>Calculix_Mesh</span>.
              Therefore we need data exchange. Please note that both participants must use this mesh with <span className={styles.highlight}>use-mesh</span>. Each dataset must be exchanged in the correct direction.
            </div>
          )}
        >
          <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
        </Tooltip>
        </li>
        <li>
          <span className={styles.highlight}>data</span>: Dataset to be exchanged..
        </li>
        <li>
          <span className={styles.highlight}>mesh</span>: Name of the mesh through which data is exchanged.
        </li>
        <li>
          <span className={styles.highlight}>from</span>: Source participant.
        </li>
        <li>
          <span className={styles.highlight}>to</span>: Destination participant.
        </li>
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
        <li>
          <span className={styles.highlight}>data</span>: Dataset to be measured.
        </li>
        <li>
          <span className={styles.highlight}>mesh</span>: Mesh holding the dataset data.
        </li>
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
        </div> :
          <div>
            We change the initial-relaxation-value into 0.9, and see what will happen
            <div className={styles.rangeSlider}>
              <input
                className={styles.rangeSliderRange}
                id="myRange"
                onChange={this.props.initialRelaxationChangeAction}
                type="range"
                min="0.1"
                max="0.9"
                step="0.1"
              />
                <span className={styles.rangeSliderValue}>{this.props.initialRelaxationValue.toString()}</span>
            </div>
          </div>
        }
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  firstTaskCompleted: completedTaskSelector(),
  initialRelaxationValue: initialRelaxationValueSelector(),
});
function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
    initialRelaxationChangeAction: (event) => {dispatch({type: INITIAL_RELAXATION_CHANGE, check: (document.getElementById(event.currentTarget.id) as HTMLInputElement).value}); document.getElementById('ScrollableXmlContainer').scrollTop = 500; }, /*reducer in step 2*/
  };
}

export default connect < any, any, any > (
  mapStateToProps,
  mapDispatchToProps,
)(Sub6);
