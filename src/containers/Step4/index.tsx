import {connect} from 'react-redux';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import {
  partNumberSelector,
} from '../Tutorial/selectors';
import {
  doneSelector,
} from '../Step3/selectors';
import * as styles from './styles.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {ConsoleId} from '../Step3/index';
import WhatToDoBlock from '../WhatToDoBlock/index';
import Step4Visualization from '../Step4Visualization/index';

interface Step4Props {
  leftDone: boolean;
  rightDone: boolean;
  partNumber: number;
}

class Step4 extends React.Component<Step4Props, any> {
  constructor(props: Step4Props) {
    super(props);
  }
  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            Visualization
          </div>
          { (this.props.leftDone && this.props.rightDone) ?
            <div className={styles.expContent}>
              <WhatToDoBlock stepNumber={4} partNumber={this.props.partNumber}/>
            </div> :
            <div className={styles.expContent}>
              The simulation is not yet done, therefore there is no result. Please click the back button, go back to
              step 3 and then run the simulation.
            </div>
          }
        </div>
        <div className={styles.visualize}>
          { !(this.props.leftDone && this.props.rightDone) ?
            <Step4Visualization partNumber={this.props.partNumber}/> :
              <div className={styles.visualHeader}>Nothing to be shown</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  leftDone: doneSelector(ConsoleId.left),
  rightDone: doneSelector(ConsoleId.right),
  partNumber: partNumberSelector(),
});

export default connect<any, any, any>(
  mapStateToProps,
)(Step4);
