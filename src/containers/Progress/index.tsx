/**
 * Created by hasan on 21.06.17.
 */
import {connect} from 'react-redux';
import {TOTAL_PART} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import * as ProgressSteps from 'react-progress-steps';

interface ProgressProps {
  percentage: number;
  partNumber: number;
}

class ProgressBar extends React.Component<ProgressProps, any> {
  public render() {
    return (
      <div className={styles.progress}>
        <ProgressSteps steps={TOTAL_PART} current={this.props.partNumber} styling={false} />
        {/*
        <div style={{width: this.props.percentage + '%'}} className={styles.bar}/>
        */}
      </div>
    );
  }
}

export default ProgressBar;
