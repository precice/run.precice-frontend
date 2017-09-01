import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
// import * as styles from './styles.scss';
// import * as TextForStep2 from './TextForStep2';

interface Sub6Props {
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
        Last, we need to set up the way the two solver couple with each other.
        <br/>
        <li>
          coupling scheme:
          <br/>
          <select id="" name="">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="serial">serial</option>
            <option value="parallel">parallel</option>
          </select>
          -
          <select id="" name="">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="implicit">implicit</option>
            <option value="explicit">explicit</option>
          </select>
        </li>
        <br/>
        <li>
          we set "SU2_CFD" as the first participant, and "Calculix" as the second participant
          <button>set</button>
          <br/>
          Keep in mind that, the post-processing at the convergence measures are applied at the second participant.
        </li>
        <br/>
        <li>
          We can also set the total simulation run time <input placeholder="max-time value"/>,
          <br/>
          Length of the maximum allowed coupling timestep <input placeholder="timestep-length value"/>,
          <br/>
          Maximum number of implicit sub-iterations <input placeholder="max-iterations value"/>,
        </li>
        <br/>
        <li>
          We need to exchange data for those we've mapped in the previous step.
          <br/>
          for "Force0":<button>set</button>
          <br/>
          mesh:
          <select id="exchageForceMesh" name="exchageForceMesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          from:
          <select id="exchageForceFrom" name="exchageForceFrom">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_CFD">SU2_CFD</option>
            <option value="Calculix">Calculix</option>
          </select>
          to:
          <select id="exchageForceTo" name="exchageForceTo">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_CFD">SU2_CFD</option>
            <option value="Calculix">Calculix</option>
          </select>
          <br/>
          for "DisplacementDeltas0":<button>set</button>
          <br/>
          mesh:
          <select id="exchageForceMesh" name="exchageForceMesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          from:
          <select id="exchageForceFrom" name="exchageForceFrom">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_CFD">SU2_CFD</option>
            <option value="Calculix">Calculix</option>
          </select>
          to:
          <select id="exchageForceTo" name="exchageForceTo">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_CFD">SU2_CFD</option>
            <option value="Calculix">Calculix</option>
          </select>
        </li>
        <br/>
        <li>
          We can also set the convergence measure for those we've mapped in the previous step.
          <br/>
          for "Force0":<button>set</button>
          <br/>
          mesh:
          <select id="convergenceForceMesh" name="convergenceForceMesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          limit:
          <input placeholder="limit"/>
          <br/>
          for "DisplacementDeltas0":<button>set</button>
          <br/>
          mesh:
          <select id="convergenceForceMesh" name="convergenceForceMesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          limit:
          <input placeholder="limit"/>
        </li>
        <br/>
        <li>
          extrapolation-order:<input placeholder="extrapolation-order"/>
        </li>
        <br/>
        <li>
          Post-processing:
          <br/>
          name: "DisplacementDeltas0" <button>set</button>
          <br/>
          mesh:
          <select id="PostProcessingMesh" name="PostProcessingMesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          initial-relaxation:<input placeholder="initial-relaxation"/>
        </li>
        <br/>

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
)(Sub6);

