import * as React from 'react';
import * as styles from '../../styles.scss';
import { Tooltip } from 'react-tippy';

interface Sub4Props {
}

class Sub4 extends React.Component<Sub4Props, any> {
  public render() {
    return (
      <div>
        We use a similar configuration for CalculiX as for SU2. For more details, please see the explanation for the
        SU2 tags.
        <br/>
        <li>
          <span className={styles.highlight}>watch-point</span>: A watch point can be used to follow the transient
          changes of data and mesh vertex coordinates at a given point. Here we set a watch point on the CalculiX mesh.
        </li>
        <br/>
      </div>
    );
  }
}

export default Sub4;

