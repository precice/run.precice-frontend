import {connect} from 'react-redux';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import * as io from 'socket.io-client';

export const socket = io('http://localhost:3001');


interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {

  public render() {
    return (
      <div className={styles.container}>
        <script src="/socket.io/socket.io.js"/>{/*for connecting to backend*/}
        <div className={styles.banner}>{/*website banner*/}
          <Link to="/" className={styles.label}>{/*preCICE label*/}
            <img src="src/components/Root/Precice-logo.gif" className={styles.img}/>
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </Link>{/*preCICE label*/}
        </div>{/*website banner*/}
        <div className={styles.child}>{this.props.children}</div>
        <footer className={styles.footer}>Copyright &copy;{/*copyright footer*/}
          <span className={styles.label}>{/*preCICE label*/}
            <span className={styles.pre}>pre</span>
            <span className={styles.cice}>CICE</span>
          </span>{/*preCICE label*/}
        </footer>{/*copyright footer*/}
      </div>
    );
  }
}

export default Root;

