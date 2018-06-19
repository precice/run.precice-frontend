import {connect} from 'react-redux';
import * as React from 'react';
import {createStructuredSelector} from 'reselect';
import {
  hidCheckSelector,
  xmlflagSelector,
  blockNumberSelector,
} from './selectors';
import {
  modalClickSelector,
  partNumberSelector,
} from '../Tutorial/selectors';
import {
  HID_CHECK2,
  CHANGE_BLOCK_NUMBER,
} from '../constants';
import * as styles from './styles.scss';
import { config } from '../configurationFile/global_config'; 
import XmlBlock from '../XmlBlock/index';
import Step2SubExplanationBlock from '../Step2SubExplanationBlock/index';
import WhatToDoBlock from '../WhatToDoBlock/index';

interface Step2Props {
  hidAction: () => void;
  hidCheck2: boolean;
  modalClick: boolean;
  xmlflag: {
    part1: boolean[];
    part2: boolean[];
    part3: boolean[];
    part4: boolean[];
    part5: boolean[];
  };
  initialRelaxationValue: number;
  partNumber: number;
  blockNumber: string;
  changeBlockNumber: (partNumber: number, blockNumber: string) => void;
}


class Step2 extends React.Component<Step2Props, undefined> {
  constructor(props: Step2Props) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.subContainer}>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}/>
            <span id="hideButton" onClick={this.props.hidAction} className={styles.hide}>
              {this.props.hidCheck2 ?
                <span>expand <i className="fa fa-chevron-down" aria-hidden="true"/></span> :
                <span>hide <i className="fa fa-chevron-up" aria-hidden="true"/></span> }
            </span>
          </div>
          <div id="hideStep2" className={styles.expContent} hidden={this.props.hidCheck2}>
            <WhatToDoBlock stepNumber={2} partNumber={this.props.partNumber}/>
          </div>
          <div className={styles.expContentHide} hidden={!this.props.hidCheck2}/>
        </div>
        <div
          id="interact"
          className={styles.interactContainer}
        >
          {/* If we arrive to the page via table of content etc, they don't share info about seen xml parts. Otherwise they do, (since xml files are similar), */} 
          {/* in all parts, but part 6. Modification below ensures consistent behaviour on common unseen parts  */} 
          <XmlBlock
            xmlFlag = { this.props.xmlflag['part1'] }
            blockNumber={this.props.blockNumber}
            partNumber={this.props.partNumber}
            changeBlockNumber={this.props.changeBlockNumber}
          />
          {/* Right side with the explanations of the xml block */}
          <div className={styles.commentContainer}>
            <div className={styles.commentHeader}>
              { config[this.props.partNumber - 1]['sub' + this.props.blockNumber] }
            </div>
            <div  className={styles.exp}>
              <Step2SubExplanationBlock partNumber={this.props.partNumber} blockNumber={this.props.blockNumber}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  hidCheck2: hidCheckSelector(),
  xmlflag: xmlflagSelector(),
  modalClick: modalClickSelector(),
  partNumber: partNumberSelector(),
  blockNumber: blockNumberSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    hidAction: () => { dispatch({ type: HID_CHECK2, check: document.getElementById('hideStep2').hidden}); },
    changeBlockNumber: (partNumber, blockNumber) => { dispatch({ type: CHANGE_BLOCK_NUMBER, partNumber, blockNumber }); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

