import * as React from 'react';
import * as styles from './styles.scss';

interface Part4Props {
}

class Part4 extends React.Component<Part4Props, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

export default Part4;
