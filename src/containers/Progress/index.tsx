/**
 * Created by hasan on 21.06.17.
 */
import {TOTAL_PART} from '../constants';
import * as React from 'react';
import * as styles from './styles.scss';
import * as ProgressSteps from 'react-progress-steps';

interface ProgressProps {
  partNumber: number;
}

class ProgressBar extends React.Component<ProgressProps, any> {
  public render() {
    return (
      <div className={styles.progress}>
        <ProgressSteps steps={TOTAL_PART} current={this.props.partNumber} styling={false}/>
      </div>
    );
  }
}

export default ProgressBar;
