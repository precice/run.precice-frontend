import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as preiceLogo from '../../static/Precice-logo.png';
import * as preciceLogoCropped from '../../static/Precice-logo-cropped.png' 
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
        <Menu styles={ burgerStyles}  >

        <div className={styles.label}> 
          <Link to="/" className={styles.label}>
            <img src={preiceLogo} className={styles.img}/>  
          </Link>
        </div> 
        <div className={"menu-item"}>
      <div className={styles.menu}>
        <div className={styles.menuItem} > <Link to="/tutorial/part1/step1" > <i className="fa fa-sort-down"> </i>  Part 1. Introduction </Link> </div>
        <div className={styles.menuItem} > <Link to="/tutorial/part2/step1" > <i className="fa fa-sort-down"></i>  Part 2. Longer simulation  </Link> </div> 
        <div className={styles.menuItem} > <Link to="/tutorial/part3/step1" > <i className="fa fa-sort-down"></i>  Part 3: Implicit coupling </Link> </div> 
        <div className={styles.menuItem} > <Link to="/tutorial/part4/step1" > <i className="fa fa-sort-down"></i>  Part 4: Quasi-Newton post-processing  </Link> </div> 
        <div className={styles.menuItem} > <Link to="/tutorial/part5/step1" > <i className="fa fa-sort-down"></i>  Part 5: Parallel Coupling </Link> </div> 
        {/*  <ExpandableList header="Part 5: Parallel Coupling"/> */} 
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

