import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
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
          For each solver, we need to specify a unique mesh name. Here, we name them "SU2_Mesh0" and "Calculix_Mesh"
          <button>set</button>
        </li>
        <br/>
        <li>
          We also need to assign the datasets, which are defined in last step, to this mesh, that are "Forces0" and "DisplacementDeltas0".
          <button>set</button>
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

