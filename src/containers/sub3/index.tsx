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
        Third, let's speicify the behavior of SU2.
        <br/><br/>
        <li>
          We first set the participant name "SU2_CFD"
          <button>set</button>
        </li>
        <br/>
        <li>
          For fluid, we uses two meshes, one is "SU2_Mesh0", the other is "Calculix_Mesh"
          <button>set</button>
          <br/>
          We also need to set the provider of SU2
          Provider of "SU2_Mesh0"
          <select id="provideSU2inSU2" name="provide">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="yes">provide = "yes"</option>
            <option value="SU2">from = "SU2_CFD"</option>
            <option value="Calculix">from = "Calculix"</option>
          </select>
          <br/>
          Provider of "Calculix_Mesh"
          <select id="provideCalculixinSU2" name="provide">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="yes">provide = "yes"</option>
            <option value="SU2">from = "SU2_CFD"</option>
            <option value="Calculix">from = "Calculix"</option>
          </select>
        </li>{/*Set the behavior of mesh*/}
        <br/>
        <li>
          Now we set the dataset in which SU2 needs to write:
          <br/>
          name:
          <select id="writeSU2name" name="writeSU2name">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="Forces0">Forces0</option>
            <option value="DisplacementDeltas0">DisplacementDeltas0</option>
          </select>
          <br/>
          mesh:
          <select id="writeSU2mesh" name="writeSU2mesh">
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
          <select id="readSU2name" name="readSU2name">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="Forces0">Forces0</option>
            <option value="DisplacementDeltas0">DisplacementDeltas0</option>
          </select>
          <br/>
          mesh:
          <select id="readSU2mesh" name="readSU2mesh">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
        </li>
        <br/>
        <li>
          For mapping, we first set the writing direction:
          <br/>
          from:
          <select id="mappingWriteSU2from" name="mappingWriteSU2from">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          to:
          <select id="mappingWriteSU2to" name="mappingWriteSU2to">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          Aslo the constraint:
          <select id="mappingWriteSU2constraint" name="mappingWriteSU2constraint">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="conservative">conservative</option>
            <option value="consistent">consistent</option>
          </select>
        </li>
        <br/>
        <li>
          For the reading direction of mapping, the procedure is the same:
          <br/>
          from:
          <select id="mappingReadSU2from" name="mappingReadSU2from">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          to:
          <select id="mappingReadSU2to" name="mappingReadSU2to">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="SU2_Mesh0">SU2_Mesh0</option>
            <option value="Calculix_Mesh">Calculix_Mesh</option>
          </select>
          <br/>
          Aslo the constraint:
          <select id="mappingReadSU2constraint" name="mappingReadSU2constraint">
            <option hidden={true} selected={true} > -- select an option -- </option>
            <option value="conservative">conservative</option>
            <option value="consistent">consistent</option>
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

