/**
 * Created by hasan on 21.06.17.
 */
import {connect} from 'react-redux';
import {EXAMPLE_ACTION} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';

interface ProgressProps {
  percentage: number;
}

class ProgressBar extends React.Component<ProgressProps, any> {
  public render() {
    return (
      <div className={styles.progress}>
        <div style={{width: this.props.percentage + '%'}} className={styles.bar}/>
      </div>
    );
  }
}

export default ProgressBar;
