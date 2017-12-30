import {connect} from 'react-redux';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {
  partNumberSelector,
} from '../Tutorial/selectors';
import {
  doneSelector,
} from '../Step3/selectors';
import * as styles from './styles.scss';
import * as rightGraph from '../../static/right.png';
import * as leftGraph from '../../static/left.png';
import * as lastGraph from '../../static/right.png';
import * as displacementGraph from '../../static/displacement.png';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {ConsoleId} from '../Step3/index';
import WhatToDoBlock from '../WhatToDoBlock/index';

interface Step4Props {
  leftDone: boolean;
  rightDone: boolean;
  partNumber: number;
}

class Step4 extends React.Component<Step4Props, any> {
  constructor(props: Step4Props) {
    super(props);
    this.state = { tabIndex: 0 };
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
        <div className={styles.visialize}>
          { (this.props.leftDone && this.props.rightDone) ?
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
              <TabList className={styles.reactTabsTabList}>
                <Tab className={this.state.tabIndex === 0 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Right
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 1 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Left
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 2 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Last
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 3 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Displacement
                  Graph</Tab>
              </TabList>
              <TabPanel
                className={this.state.tabIndex === 0 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={rightGraph} className={styles.graph}/>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 1 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={leftGraph} className={styles.graph}/>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 2 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={lastGraph} className={styles.graph}/>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 3 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={displacementGraph} className={styles.graph}/>
              </TabPanel>
            </Tabs> :
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
              <TabList className={styles.reactTabsTabList}>
                <Tab className={this.state.tabIndex === 0 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Right
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 1 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Left
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 2 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Last
                  Graph</Tab>
                <Tab className={this.state.tabIndex === 3 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Displacement
                  Graph</Tab>
              </TabList>
              <TabPanel
                className={this.state.tabIndex === 0 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <div>NOTHING TO BE SHOWN</div>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 1 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <div>NOTHING TO BE SHOWN</div>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 2 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <div>NOTHING TO BE SHOWN</div>
              </TabPanel>
              <TabPanel
                className={this.state.tabIndex === 3 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <div>NOTHING TO BE SHOWN</div>
              </TabPanel>
            </Tabs>
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
