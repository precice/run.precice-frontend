import { connect } from 'react-redux';
import { HID_CHECK2, XML_CLICK, IVE_READ, BLOCKNUMBER_FLAG} from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import XmlBlock from '../XmlBlock/index';
import Step2SubExplanationBlock from '../Step2SubExplanationblock/index';
import {
  hidCheckSelector,
  xmlFlagSelector,
  iveReadSelector,
  initialRelaxationValueSelector,
  blockNumberSelector} from './selectors';
import {
  completedTaskSelector,
  modalClickSelector,
  partNumberSelector} from '../Tutorial/selectors';

interface Step2Props {
  hidAction: () => void;
  hidCheck2: boolean;
  firstTaskCompleted: boolean;
  iveReadAction: () => void;
  iveReadStep2: boolean;
  modalClick: boolean;
  xmlAction: () => void;
  xmlflag1: boolean;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
  initialRelaxationValue: number;
  partNumber: number;
  blockNumber: string;
  blockNumberAction: () => void;
}

let whichSection = '';
let partNumber = 1;
let blockNumber = '1';

const initial1 = config1.initial;
const initial2 = config2.initial;

class Step2 extends React.Component<Step2Props, any> {
  constructor(props: Step2Props) {
    super(props);
    this.state = {
      mouseOverLineIndex: {
        start: 1,
        end: 1,
      },
    };
    this.closeOverlay = this.closeOverlay.bind(this);
    this.ButtonColorChange = this.ButtonColorChange.bind(this);
    this.ButtonColorOriginal = this.ButtonColorOriginal.bind(this);
  }
  private closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    this.props.iveReadAction();
  }
  private ButtonColorChange(event) {
    document.getElementById(event.currentTarget.id).style.color = 'gray';
    document.getElementById(event.currentTarget.id).style.borderColor = 'gray';
  }
  private ButtonColorOriginal(event) {
    document.getElementById(event.currentTarget.id).style.color = 'white';
    document.getElementById(event.currentTarget.id).style.borderColor = 'white';
  }
  public render() {
    return (
      <div onMouseOver={this.props.xmlAction} className={styles.subContainer}>
        {!this.props.iveReadStep2 ?
        <div id="overlay" className={styles.overlay}>
          <div className={styles.overlayLanding}>This is a small guide on how to use the website</div>
          <div className={styles.overlayIntro}>You can hide this box <br/> by clicking HIDE <span className="fa fa-long-arrow-right" style={{ fontSize: '18px' }}/></div>
          <div className={styles.overlayXml}>By clicking these lines, <br/>you can see explanation of the section you click on the right</div>
          <div className={styles.overlayExp}>You can see explanation for each line here.
          Also, you can click on <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/> to get further information.</div>
          <div id="overlayButton"onClick={this.closeOverlay} onMouseOver={this.ButtonColorChange} onMouseOut={this.ButtonColorOriginal} className={styles.overlayButton}>I'VE READ</div>
        </div> :
          <div/>}
        <script>{partNumber = this.props.partNumber}</script>
        <script>{blockNumber = this.props.blockNumber}</script>
        <script>{whichSection = 'xmlflag' + blockNumber}</script>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span id="hideButton" onClick={this.props.hidAction} className={styles.hide} onMouseOver={this.ButtonColorChange}  onMouseOut={this.ButtonColorOriginal} >{this.props.hidCheck2 ? 'expand' : 'hide'}
            </span>
          </div>
          <div id="hideStep2" className={styles.expContent} hidden={this.props.hidCheck2}>
            preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the
            coupled simulation. However, we still need solvers specific configuartion file, that we will not discuss in this tutorial.
            <br/>
            Click on the XML file, you will learn how to set up the configuration file.
          </div>
        </div>
        <div className={styles.interactContainer}>
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
  xmlflag1: xmlFlagSelector('xmlflag1'),
  xmlflag2: xmlFlagSelector('xmlflag2'),
  xmlflag3: xmlFlagSelector('xmlflag3'),
  xmlflag4: xmlFlagSelector('xmlflag4'),
  xmlflag5: xmlFlagSelector('xmlflag5'),
  xmlflag6: xmlFlagSelector('xmlflag6'),
  firstTaskCompleted: completedTaskSelector(),
  modalClick: modalClickSelector(),
  iveReadStep2: iveReadSelector('Step2'),
  initialRelaxationValue: initialRelaxationValueSelector(),
  partNumber: partNumberSelector(),
  blockNumber: blockNumberSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    hidAction: () => { dispatch({ type: HID_CHECK2, check: document.getElementById('hideStep2').hidden}); },
    xmlAction: () => { dispatch({ type: XML_CLICK, check: whichSection}); },
    iveReadAction: () => { dispatch({ type: IVE_READ, whichStep: 'Step2'}); },
    blockNumberAction: (event) => { dispatch({ type: BLOCKNUMBER_FLAG, check: event.currentTarget.id.substring(3, 4)}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

