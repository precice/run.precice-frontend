import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import * as rightGraph from '../../static/right.png';
import * as leftGraph from '../../static/left.png';
import * as lastGraph from '../../static/right.png';
import * as displacementGraph from '../../static/displacement.png';
import {FIRST_TASK_COMPLETED} from '../constants';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

interface Step4Props {
  completeAction: () => void;
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
            what to do
          </div>
        </div>
        <div className={styles.visialize}>
          <div className={styles.visialHeader}>
            Visualization<br/></div>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
              <TabList className={styles.reactTabsTabList}>
                <Tab className={this.state.tabIndex === 0 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Right Graph</Tab>
                <Tab className={this.state.tabIndex === 1 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Left Graph</Tab>
                <Tab className={this.state.tabIndex === 2 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Last Graph</Tab>
                <Tab className={this.state.tabIndex === 3 ? styles.reactTabsTabSelected : styles.reactTabsTab}>Displacement Graph</Tab>
              </TabList>
              <TabPanel className={this.state.tabIndex === 0 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={rightGraph} className={styles.graph} />
              </TabPanel>
              <TabPanel className={this.state.tabIndex === 1 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={leftGraph} className={styles.graph} />
              </TabPanel>
              <TabPanel className={this.state.tabIndex === 2 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={lastGraph} className={styles.graph} />
              </TabPanel>
              <TabPanel className={this.state.tabIndex === 3 ? styles.reactTabsTabPanelSelected : styles.reactTabsTabPanel}>
                <img src={displacementGraph} className={styles.graph} />
              </TabPanel>
            </Tabs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});
function mapDispatchToProps(dispatch) {
  return {
    };
}
export default connect<any, any, any>(
  mapStateToProps,
)(Step4);
