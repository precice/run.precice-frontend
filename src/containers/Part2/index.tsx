import * as React from 'react';
import * as styles from './styles.scss';

interface Part2Props {
}

class Part2 extends React.Component<Part2Props, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Part2;
