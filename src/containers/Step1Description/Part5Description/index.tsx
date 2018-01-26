import * as React from 'react';
import * as styles from '../styles.scss';

interface Part5SubProps {
}

class Part5Sub extends React.Component<Part5SubProps, any> {
  public render() {
    return(
      <div className={styles.tuInContainer}>
        <div className={styles.tuInHeader}>part five</div>
        <div className={styles.tuInContent}>
          For the previous four simulations we used a serial coupling scheme, whether explicit or implicit.
          In a serial coupling scheme 
        </div>
      </div>
    );
  }
}

export default Part5Sub;
