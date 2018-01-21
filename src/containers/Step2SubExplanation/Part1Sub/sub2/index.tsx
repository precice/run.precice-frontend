import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub2Props {
}

class Sub2 extends React.Component<Sub2Props, any> {
  public render() {
    return (
      <div>
        Second, let's set up the mesh.
        <br/><br/>
        <li>
          <span className={styles.highlight}>mesh</span>
          : Specifies a surface mesh consisting of vertices. The mesh coordinates are defined by a simulation participant.
          <Tooltip
            trigger="click"
            width="100"
            interactive
            html={(
              <div>
                Apart from the vertices, the mesh can optionally contain, edges and triangles.
                The vertices carry data, specified in the <span className={styles.highlight}>use-data</span> tag.
                <br/>The geometry data of the mesh can either be provided by a participant (see tag <span className={styles.highlight}>use-mesh</span> in the next part)
                or by the <span className={styles.highlight}>geometry</span> tag (not used here).
              </div>
            )}
            title="mesh_additional"
          >
            <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/>&nbsp;
          </Tooltip>
        </li>
        <br/>
        <li>
          <span className={styles.highlight}>use-data</span>
          : Assigns a previously-defined dataset to the mesh.
        </li>
      </div>
    );
  }
}

export default Sub2;

