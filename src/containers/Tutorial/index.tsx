import {connect} from 'react-redux';
import {XML_ALL_CLICK, XML_CLICK, MODAL_CLICK, BLOCKNUMBER_FLAG, PARTNUMBER_FLAG} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import {
  buttonLinksSelector,
  percentageSelector,
  modalClickSelector,
  partNumberSelector,
  } from './selectors';
import { xmlFlagSelector, blockNumberSelector} from '../Step2/selectors';
import {
  busySelector} from '../Step3/selectors';
import {
  ConsoleId} from '../Step3/index';

interface TutorialProps {
  percentage: number;
  buttonLinks: {
    previous?: string,
    next?: string,
  };

  modalClick: boolean;
  modalAction: () => void;

  leftBusy: boolean;
  rightBusy: boolean;

  xmlSkip: () => void;
  xmlAction: () => void;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;

  partNumber: number;
  blockNumber: string;
  blockNumberAction: () => void;
}

const initial1 = config1.initial;
const initial2 = config2.initial;


class Tutorial extends React.Component<TutorialProps, any> {
  constructor(props: TutorialProps) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  private openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  private closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  public render() {
    return (
      <div className={styles.tutorialContainer}>
        <div onMouseOver={this.props.modalAction} id="myModal" className={styles.modal}>
          {
            window.onclick = (event) => {
              if (event.target === document.getElementById('myModal')) {
                document.getElementById('myModal').style.display = 'none';
              }
            }
          }
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <span onClick={this.closeModal} className={styles.close}>&times;</span>
              <h2>Oops, you forgot some parts ;-)</h2>
            </div>
            <div className={styles.modalBody}>
              <div>
                <li hidden={this.props.xmlflag2}>
                  <div id="modallink2" onClick={this.props.blockNumberAction}>
                    {eval('config' + this.props.partNumber + '.sub2')} (line 12 ~ 20)
                  </div>
                </li>
                <li hidden={this.props.xmlflag3}>
                  <div id="modallink3" onClick={this.props.blockNumberAction}>
                    {eval('config' + this.props.partNumber + '.sub3')} (line 26 ~ 35)
                  </div>
                </li>
                <li hidden={this.props.xmlflag4}>
                  <div id="modallink4" onClick={this.props.blockNumberAction}>
                    {eval('config' + this.props.partNumber + '.sub4')} (line 37 ~ 40)
                  </div>
                </li>
                <li hidden={this.props.xmlflag5}>
                  <div id="modallink5" onClick={this.props.blockNumberAction}>
                    {eval('config' + this.props.partNumber + '.sub5')} (line 44)
                  </div>
                </li>
                <li hidden={this.props.xmlflag6}>
                  <div id="modallink6" onClick={this.props.blockNumberAction}>
                    {eval('config' + this.props.partNumber + '.sub6')} (line 46 ~ 61)
                  </div>
                </li>
              </div>
            </div>
            {this.props.buttonLinks.next && <Link onClick={this.props.xmlSkip} to={this.props.buttonLinks.next} className={styles.modalFooter}>
              No, I want to skip those parts.
            </Link>}
          </div>{/*modal content*/}
        </div>{/*the modal*/}
        <ProgressBar percentage={this.props.percentage}/>
        <div className={styles.child}>{this.props.children}</div>
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {
              (this.props.buttonLinks.next === '/tutorial/part1/step4' &&
              ( this.props.leftBusy || this.props.rightBusy )) ?
                this.props.buttonLinks.previous && <div onClick={this.openModal} className={styles.btnL}>BACK</div> :
              this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          <div className={styles.btnSubCon}>
            {
              ((this.props.buttonLinks.next === '/tutorial/part1/step3' &&
               ( !this.props.xmlflag2 || !this.props.xmlflag3 || !this.props.xmlflag4 ||
                 !this.props.xmlflag5 || !this.props.xmlflag6 )) ||
               (this.props.buttonLinks.next === '/tutorial/part1/step4' &&
               ( this.props.leftBusy || this.props.rightBusy )) ?
                this.props.buttonLinks.next && <div onClick={this.openModal} className={styles.btnR}>NEXT</div> :
                this.props.buttonLinks.next && <Link to={this.props.buttonLinks.next} className={styles.btnR}>NEXT</Link>)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  percentage: percentageSelector(),
  buttonLinks: buttonLinksSelector(),
  modalClick: modalClickSelector(),
  xmlflag2: xmlFlagSelector('xmlflag2'),
  xmlflag3: xmlFlagSelector('xmlflag3'),
  xmlflag4: xmlFlagSelector('xmlflag4'),
  xmlflag5: xmlFlagSelector('xmlflag5'),
  xmlflag6: xmlFlagSelector('xmlflag6'),

  leftBusy: busySelector(ConsoleId.left),
  rightBusy: busySelector(ConsoleId.right),
  partNumber: partNumberSelector(),
  blockNumber: blockNumberSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    modalAction: () => {
      dispatch({type: MODAL_CLICK});
    },
    xmlSkip: () => {
      dispatch({type: XML_ALL_CLICK});
      document.getElementById('myModal').style.display = 'none';
    },
    xmlAction: (event) => {
      dispatch({type: XML_CLICK, check: event.currentTarget.id});
    },
    blockNumberAction: (event) => {
      dispatch({
        type: BLOCKNUMBER_FLAG,
        check: event.currentTarget.id.substring(9, 10),
      });
      document.getElementById('myModal').style.display = 'none';
    },
  };
}

export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
