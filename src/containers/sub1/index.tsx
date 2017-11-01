import { connect } from 'react-redux';
import { EXAMPLE_ACTION } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import * as styles from '../sub1/styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub1Props {
}

class Sub1 extends React.Component<Sub1Props, any> {
  constructor() {
    super();
    this.state = {};
  }

  public render() {
    return (
      <div>
        We first need to set up the general setting of the interface.
        <br/><br/>
        <li>
          <span className={styles.highlight}>dimensions</span>
          : Specifies the number of dimensions of the problem. Can be either 2 or 3
          <Tooltip
            trigger="click"
            width="100"
            title="preCICE does not fully support 1D solvers. For this example, however, we can treat our 1D solvers as 2D solvers by ignoring all the y-components."
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>data:vector name="Force0"</span>
          : Datasets are defined here, which are later assigned to the meshes used in the simulation. The data type could be either vector or scalar.
          <br/><br/> We can set the name as we like, but should be consist to solver's configuration file.
        </li>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    example: () => dispatch({ type: EXAMPLE_ACTION }),
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Sub1);

