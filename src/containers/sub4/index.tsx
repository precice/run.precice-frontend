import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  constructor() {
    super();
    this.state = {
    };
  }
  public render() {
    return (
      <div>
        For Calculix, the procedure is the same. However, we don't need to set the mapping direction again.
        <br/>
        <li>
          Set the participant name "Calculix"
          <button>set</button>
        </li>
        <br/>
        <li>
          Solid only uses one mesh, that is, "Calculix_Mesh".
          <button>set</button>
          <br/>
          Provider:
          <select id="provideCalculixinCalculix" name="provide">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="yes">provide = "yes"</option>
            <option value="SU2">from = "SU2_CFD"</option>
            <option value="Calculix">from = "Calculix"</option>
          </select>
        </li>
        <br/>
        <li>
          Now we set the dataset in which Calculix needs to write:
          <br/>
          name:
          <select id="writeCalculixname" name="writeCalculixname">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="Forces0">Forces0</option>
            <option value="DisplacementDeltas0">DisplacementDeltas0</option>
          </select>
          <br/>
          mesh:
          <select id="writeCalculixmesh" name="writeCalculixmesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
        </li>
        <br/>
        <li>
          Same procedure for read:
          <br/>
          name:
          <select id="readCalculixname" name="readCalculixname">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="Forces0">Forces0</option>
            <option value="DisplacementDeltas0">DisplacementDeltas0</option>
          </select>
          <br/>
          mesh:
          <select id="readCalculixmesh" name="readCalculixmesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
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
)(Sub4);

