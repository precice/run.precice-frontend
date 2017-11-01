import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';

import * as styles from '../sub1/styles.scss';
import { Tooltip } from 'react-tippy';

import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub2Props {
}

class Sub2 extends React.Component<Sub2Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        Second, let's set up the mesh.
        <br/><br/>
        <li>
          <span className={styles.highlight}>mesh name</span>
          : Specifies a unique name for the mesh.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-data name</span>
          : Specifies a previously-defined dataset that is assigned to this mesh
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                a surface mesh consisting of vertices and, optionally, edges and triangles (they are needed in special circumstances, for example when a nearest projection mapping is used).
                <br/>The vertices carry data, specified in the <span className={styles.highlight}>use-data</span> tag.
                <br/>The geometry data of the mesh can either be provided by a participant (see tag <span className={styles.highlight}>use-mesh</span> in the next part)
                or by the <span className={styles.highlight}>geometry</span> tag (not used here).
              </div>
            )}
            title="preCICE does not fully support 1D solvers. For this example, however, we can treat our 1D solvers as 2D solvers by ignoring all the y-components."
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
)(Sub2);

