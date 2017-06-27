import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/styles/';

interface step2Props {
}


class Step2 extends React.Component<step2Props, any> {
  constructor(){
    super();
    const initialCodeString = `<?xml version="1.0"?>

<precice-configuration>

  <solver-interface dimensions="2">

    <!-- Data fields that are exchanged between the solvers -->
    <data:scalar name="Pressure"/>
    <data:scalar name="CrossSectionLength"/>

    <!-- A common mesh that uses these data fields -->
    <mesh name="Fluid_Nodes">
      <use-data name="CrossSectionLength"/>
      <use-data name="Pressure"/>
    </mesh>

    <mesh name="Structure_Nodes">
      <use-data name="CrossSectionLength"/>
      <use-data name="Pressure"/>
    </mesh>

    <!-- Represents each solver using preCICE. In a coupled simulation, two participants have to be
         defined. The name of the participant has to match the name given on construction of the
         precice::SolverInterface object used by the participant. -->

    <participant name="FLUID">
      <!-- Makes the named mesh available to the participant. Mesh is provided by the solver directly. -->
      <use-mesh name="Fluid_Nodes" provide="yes"/>
      <use-mesh name="Structure_Nodes" from="STRUCTURE"/>
      <!-- Define input/output of the solver.  -->
      <write-data name="Pressure" mesh="Fluid_Nodes"/>
      <read-data  name="CrossSectionLength" mesh="Fluid_Nodes"/>
      <mapping:nearest-neighbor direction="write" from="Fluid_Nodes" to="Structure_Nodes" constraint="consistent" timing="initial"/>
      <mapping:nearest-neighbor direction="read"  from="Structure_Nodes" to="Fluid_Nodes" constraint="consistent" timing="initial"/>
    </participant>

    <participant name="STRUCTURE">
      <use-mesh name="Structure_Nodes" provide="yes"/>
      <write-data name="CrossSectionLength" mesh="Structure_Nodes"/>
      <read-data  name="Pressure"      mesh="Structure_Nodes"/>
    </participant>

    <!-- Communication method, use TCP/IP sockets, change network to "ib0" on SuperMUC -->
    <m2n:sockets from="FLUID" to="STRUCTURE" distribution-type="gather-scatter" network="lo"/>

    <coupling-scheme:serial-implicit>
      <participants first="FLUID" second="STRUCTURE"/>
      <max-time value="1.0"/>
      <timestep-length value="1e-2" valid-digits="8"/>
      <max-iterations value="40"/>
      <exchange data="Pressure"      mesh="Structure_Nodes" from="FLUID" to="STRUCTURE" />
      <exchange data="CrossSectionLength" mesh="Structure_Nodes" from="STRUCTURE" to="FLUID" initialize="true"/>
      <relative-convergence-measure data="Pressure"        mesh="Structure_Nodes" limit="1e-5"/>
      <relative-convergence-measure data="CrossSectionLength" mesh="Structure_Nodes" limit="1e-5"/>
      <extrapolation-order value="2"/>
      <post-processing:IQN-ILS>
	<!-- PostProc always done on the second participant -->
        <data name="CrossSectionLength" mesh="Structure_Nodes"/>
        <initial-relaxation value="0.01"/>
        <max-used-iterations value="50"/>
        <timesteps-reused value="8"/>
        <filter type="QR2" limit="1e-3"/>
      </post-processing:IQN-ILS>
    </coupling-scheme:serial-implicit>

  </solver-interface>
</precice-configuration>`;
    this.state = {
      code: initialCodeString,
    };
  }
  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            what to do
          </div>
        </div>
        <div className={styles.commentContainer}>
          <div className={styles.commentHeader}>
            Explaination
          </div>
          <div className={styles.exp}>
            hello world
          </div>
        </div>
        <div className={styles.xml}>
          <SyntaxHighlighter style={sunburst}
                             value={this.state.code}
                             showLineNumbers="true"
                             language="xml"
                             onChange={(e) => this.setState({code: e.target.value})}
                             contentEditable="true">
            {this.state.code}
          </SyntaxHighlighter>
        </div>
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
)(Step2);
