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
  BLOCKNUMBER_FLAG,
  XML_VISIT,
} from '../constants';
import * as styles from './styles.scss';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import * as config3 from '../configurationFile/config3';
import * as config4 from '../configurationFile/config4';
import * as config5 from '../configurationFile/config5';
import XmlBlock from '../XmlBlock/index';
import Step2SubExplanationBlock from '../Step2SubExplanationBlock/index';
import WhatToDoBlock from '../WhatToDoBlock/index';

interface Step2Props {
  hidAction: () => void;
  hidCheck2: boolean;
  modalClick: boolean;
  xmlVisitAction: () => void;
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
  blockNumberAction: () => void;
  blockNumberInitial: () => void;
}

let whichSection = '';
let partNumber = 1;
let blockNumber = '1';

const initial1 = config1.initial;
const initial2 = config2.initial;
const initial3 = config3.initial;
const initial4 = config4.initial;
const initial5 = config5.initial;


class Step2 extends React.Component<Step2Props, any> {
  constructor(props: Step2Props) {
    super(props);
    this.state = {
      mouseOverLineIndex: {
        start: 1,
        end: 1,
      },
    };
  }
  public componentWillMount() {
    if (this.props.partNumber !== 1) {
      this.props.blockNumberInitial();
    }
}
  public render() {
    return (
      <div onMouseOver={this.props.xmlVisitAction} className={styles.subContainer}>
        <script>{partNumber = this.props.partNumber}</script>
        <script>{blockNumber = this.props.blockNumber}</script>
        <script>{whichSection = 'xmlflag' + blockNumber}</script>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span id="hideButton" onClick={this.props.hidAction} className={styles.hide}>
              {this.props.hidCheck2 ? <i className="fa fa-chevron-down" aria-hidden="true"/> :<i className="fa fa-chevron-up" aria-hidden="true"/> }
            </span>
          </div>
          <div id="hideStep2" className={styles.expContent} hidden={this.props.hidCheck2}>
            <WhatToDoBlock stepNumber={2} partNumber={this.props.partNumber}/>
          </div>
          <div className={styles.expContentHide} hidden={!this.props.hidCheck2}/>
        </div>
        <div id="interact"
             className={styles.interactContainer}>
          <XmlBlock
            blockNumber={this.props.blockNumber}
            partNumber={this.props.partNumber}
            blockNumberAction={this.props.blockNumberAction}
          />
          <div className={styles.commentContainer}>
            <div className={styles.commentHeader}>
              {eval('config' + this.props.partNumber + '.sub' + this.props.blockNumber)}
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
    xmlVisitAction: () => { dispatch({ type: XML_VISIT, part: partNumber, block: blockNumber });},
    blockNumberAction: (event) => { dispatch({ type: BLOCKNUMBER_FLAG, check: event.currentTarget.id.substring(3, 4)}); },
    blockNumberInitial: () => { dispatch({ type: BLOCKNUMBER_FLAG, check: '6' }); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

