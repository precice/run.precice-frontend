import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {

    return (
      <div className={styles.container}>
        <div className={styles.banner}>
          <Link to="/" className={styles.label}>{/*preCICE label*/}
            <img src={preiceLogo} className={styles.img}/>
          </Link>{/*preCICE label*/}
        </div>
        {/*website banner*/}
        <div className={styles.child}>{this.props.children}</div>
        <footer className={styles.footer}>Copyright &copy;{/*copyright footer*/}
          <span className={styles.label}>{/*preCICE label*/}
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </span>{/*preCICE label*/}
        </footer>
        {/*copyright footer*/}
      </div>
    );
  }
}

export default Root;

