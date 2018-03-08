import {connect} from 'react-redux';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import {
  partNumberSelector,
} from '../Tutorial/selectors';
import * as styles from './styles.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import WhatToDoBlock from '../WhatToDoBlock/index';
import Step4Visualization from '../Step4Visualization/index';

interface Step4Props {
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
          <div className={styles.expContent}>
            <WhatToDoBlock stepNumber={4} partNumber={this.props.partNumber}/>
          </div>
        </div>
        <div className={styles.visualize}>
          <Step4Visualization partNumber={this.props.partNumber}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  partNumber: partNumberSelector(),
});

export default connect<any, any, any>(
  mapStateToProps,
)(Step4);
