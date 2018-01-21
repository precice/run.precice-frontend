import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';
import * as conservativePlot from '../../../../static/conservative.png';
import * as consistentPlot from '../../../../static/consistent.png';

interface Sub3Props {
}

class Sub3 extends React.Component<Sub3Props, any> {
  public render() {
    return (
      <div>
        Now we declare the participants in our coupled simulation. Here we declare what data needs to be transferred
        between the meshes used by the solvers and how to map the data from one mesh to another. We will transfer the data
        vectors "Forces0" and "DisplacementDeltas0", defined above, between SU2 and CalculiX.
        <br/><br/>
        <li>
          <span className={styles.highlight}>participant</span>: Specifies one of the solvers using preCICE. Here we are
          concerned with SU2.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-mesh</span>: Makes a mesh available to a participant. A solver can define its
          own mesh as well as receive one from another participant. For SU2 we have both.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-mesh provide</span>: Since SU2 provides its own mesh, we set this attribute to "yes".
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-mesh from</span>: In our setup, SU2 also uses "Calculix_Mesh" which is provided
          by CalculiX. We can specify this by using the "from" attribute.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>write-data</span>: This sets the data to be written by the participant to
          preCICE. Here SU2 is writing to the preCICE interface dataset "Forces0".
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>read-data</span>: This sets the data to be read by the solver from preCICE.
          Here SU2 needs to read "DisplacementDeltas0" from the preCICE interface.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor</span>: If you have been following the explanation,
          you will know that SU2 writes "Forces0" to and reads "DisplacementDeltas0" from the preCICE interface. "DisplacementDeltas0"
          is provided by Calculix while, looking ahead, Calculix needs "Forces0" from SU2. We define a nearest neighbor
          mapping to enable this exchange of information between the meshes for the two solvers using this tag.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor direction</span>: States the direction of mapping. Can be "write" or "read".
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor from</span>: Name of source mesh.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor to</span>: Name of destination mesh.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor constraint</span>: Mapping restrictions are important when
          the participants have different grids and we need to map between them.
          The mapping can be either <span className={styles.highlight}>consistent</span>
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                For quantities that are normalized (for example, pressure, which is force per unit area), we need a consistent mapping. This means that the value at coarse nodes is the same as the value at the corresponding fine node. See here for an example:
                <br/>
                <img  style={{ width: '300px' }} src={consistentPlot}/>
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
                <img  style={{ width: '300px' }} src={conservativePlot}/>
              </div>
            )}
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>.
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>mapping:nearest-neighbor timing</span>: Specifies when the mapping is computed. We
          can do this in the beginning by setting this to <span className={styles.highlight}>initial</span>. Other options include
          <span className={styles.highlight}>onadvance and </span>, or <span className={styles.highlight}>ondemand</span>
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

export default Sub3;

