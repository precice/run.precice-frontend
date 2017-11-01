import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';

import * as styles from '../sub1/styles.scss';
import { Tooltip } from 'react-tippy';

import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub3Props {
}
class Sub3 extends React.Component<Sub3Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        Third, let's speicify the behavior of SU2.
        <br/><br/>
        <li>
          <span className={styles.highlight}>participant name</span>: Name of participant whose behavior we wish to specify.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-mesh name</span>: Name of mesh that will be used by this participant.
        </li>
        <li>
          <span className={styles.highlight}>provide</span>: Does this participant provide the mesh in its implementation?
        </li>
        <li>
          <span className={styles.highlight}>from</span>: If the mesh is provided by another participant, specify the name here.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>write-data name</span>: Name of a previously-defined dataset that needs to be written
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                the participant <span className={styles.highlight}>SU2_CFD</span> writes to the preCICE interface dataset <span className={styles.highlight}>Forces0</span>
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <li>
          <span className={styles.highlight}>read-data name</span>: Name of a previously-defined dataset that needs to be read
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                <span className={styles.highlight}>SU2_CFD</span> needs to read from the preCICE interface dataset <span className={styles.highlight}>DisplacementDeltas0</span>
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <li>
          <span className={styles.highlight}>mesh</span>: Name of mesh to / from which data needs to be written / read respectively.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor</span>: The mapping is done in a nearest neighbor manner.
        </li>
        <li>
          <span className={styles.highlight}>direction</span>: Specify the direction of mapping. Can be <span className={styles.highlight}>write</span> or <span className={styles.highlight}>read</span>
        </li>
        <li>
          <span className={styles.highlight}>from</span>: Name of source mesh.
        </li>
        <li>
          <span className={styles.highlight}>to</span>: Name of destination mesh.
        </li>
        <li>
          <span className={styles.highlight}>constraint</span>: Mapping restriction. Can be either <span className={styles.highlight}>consistent</span>
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                For quantities that are normalized (for example, pressure, which is force per unit area), we need a consistent mapping. This means that the value at coarse nodes is the same as the value at the corresponding fine node. See here for an example:
              <br/>
                <img  style={{ width: '300px' }} src="/src/containers/sub3/consistent.png"/>
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
          or <span className={styles.highlight}>conservative</span>
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                When mapping between different grids (example, from a fine to a coarse grid0, the value at a coarse node is computed as an aggregation of the corresponding fine nodes, such that the total force on the coarse and fine grid is the same. This is required for quantities that are absolute (e.g. Force, Mass, etc.). An example can be seen here:
              <br/>
                  <img  style={{ width: '300px' }} src="/src/containers/sub3/conservative.png"/>
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <li>
          <span className={styles.highlight}>mesh</span>: Timing of the mapping, i.e. when the mapping is computed.
          Can be <span className={styles.highlight}>initial</span>
          <Tooltip
          trigger="click"
          width="100"
          title="Computed only once"
        >
          <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
        </Tooltip>, <span className={styles.highlight}>onadvance</span>, or <span className={styles.highlight}>ondemand</span>
          <Tooltip
          trigger="click"
          width="100"
          title="Re-computed multiple times in case of changing coupling meshes"
        >
          <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
        </Tooltip>.

        </li>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({type: EXAMPLE_ACTION}),
  };
}

export default connect < any, any, any > (
  mapStateToProps,
  mapDispatchToProps
)(Sub3);

