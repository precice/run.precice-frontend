import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';
import * as preciceLogoCropped from '../../static/Precice-logo-cropped.png'
import * as preciceCircle from '../../static/precice-circle.png'
import * as rglogo from '../../static/RG_square_green.png'
import Popup from "reactjs-popup"
import {slide as Menu} from 'react-burger-menu'
import ExpandableList from "../Expandable"

const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '20px',
    left: '20px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#dddddd',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column'
  },
  bmItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {
    return (
      <div className={styles.container}>
        <Menu styles={burgerStyles}>

        <div className={styles.label}>
          <Link to="/" className={styles.label}>
            <img src={preiceLogo} className={styles.img}/>
          </Link>
        </div>
        <div className={"menu-item"} style={{flex: "1 1 auto"}}>
      <div className={styles.menu}>
      <ExpandableList header="Part 1. Introduction" partNumber={1}/>
      <ExpandableList header="Part 2. Longer simulation"  partNumber={2}/>
      <ExpandableList header="Part 3: Implicit coupling" partNumber={3}/>
      <ExpandableList header="Part 4: Quasi-Newton post-processing"  partNumber={4}/>
      <ExpandableList header="Part 5: Parallel Coupling" partNumber={5} />
      </div>
      <div>
        <div style={{textAlign: "center",fontSize: "24px"}}> Follow us on: </div>
      <div className={styles.mediaBar}>
        <div className={styles.mediaItem}> <a href="https://twitter.com/preCICE_org" target="_blank"> <i className="fa fa-twitter" style={{color: '#00aced'}}></i> </a> </div>
        <div className={styles.mediaItem}> <a href="https://github.com/precice/precice" target="_blank" style={{color: "black"}}> <i className="fa fa-github"></i> </a> </div>
        <div className={styles.mediaItem}> <a href="https://www.researchgate.net/project/preCICE" target="_blank"> <img src={rglogo} /> </a> </div>
        <div className={styles.mediaItem}> <a href="https://www.precice.org/" target="_blank"> <img src={preciceCircle} /> </a> </div>
      </div>
    </div>
    </div>
        </Menu>
        <div className={styles.banner}>
        {/* logo */}

        </div>
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;

