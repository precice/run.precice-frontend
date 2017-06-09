import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';

interface rootProps {
  children: any,
}
class Root extends React.Component<rootProps, undefined> {
  render() {
    return <body className={styles.container}>
    <div className={styles.banner}>
      <span className={styles.label}>
      <span className={styles.pre}>pre</span>
      <span className={styles.CICE}>CICE</span>
      </span>
    </div>
    <div>{this.props.children}</div>
    <footer className={styles.footer}>Copyright &copy;
      <span className={styles.label}>
      <span className={styles.pre}>pre</span>
      <span className={styles.CICE}>CICE</span>
      </span>
    </footer>
    </body>;
  }
}

export default Root;
