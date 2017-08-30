import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
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
        Third, let's speicify the behavior between two solvers.
        <br/><br/>
        <li>
          We first set the participant name "SU2_CFD" and "Calculix"
          <button>set</button>
        </li>
        <br/>
        <li>
          Fluid uses two mesh, one is "SU2_Mesh0" provide by itself. Therefore we set the provide:
          <select id="provide" name="provide">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
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

