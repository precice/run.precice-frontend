import {connect} from 'react-redux';
import {XML_ALL_CLICK, XML_CLICK, FIRST_TASK_COMPLETED, MODAL_CLICK} from '../constants';
import {createStructuredSelector} from 'reselect';
import * as React from 'react';
import {Link} from 'react-router-dom';
import * as styles from './styles.scss';
import ProgressBar from '../Progress/index';
import * as TextForStep2 from '../Step2/TextForStep2';
import {
  buttonLinksSelector,
  percentageSelector,
  completedTaskSelector,
  modalClickSelector} from './selectors';
import {
  xmlFlag1Selector,
  xmlFlag2Selector,
  xmlFlag3Selector,
  xmlFlag4Selector,
  xmlFlag5Selector,
  xmlFlag6Selector} from '../Step2/selectors';
import ScrollableXmlContainer from '../Step2/index';

interface TutorialProps {
  percentage: number;
  buttonLinks: {
    previous?: string,
    goback: string,
    next?: string,
  };

  modalClick: boolean;
  modalAction: () => void;

  xmlSkip: () => void;
  xmlAction: () => void;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
  firstTaskCompleted: boolean;
  completeAction: () => void;
}

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
              <li hidden={this.props.xmlflag2}><Link onClick={this.closeModal} to="/tutorial/step2/sub2">{TextForStep2.sub2} (line 12 ~ 20)</Link></li>
              <li hidden={this.props.xmlflag3}><Link onClick={this.closeModal} to="/tutorial/step2/sub3">{TextForStep2.sub3} (line 26 ~ 35)</Link></li>
              <li hidden={this.props.xmlflag4}><Link onClick={this.closeModal} to="/tutorial/step2/sub4">{TextForStep2.sub4} (line 37 ~ 40)</Link></li>
              <li hidden={this.props.xmlflag5}><Link onClick={this.closeModal} to="/tutorial/step2/sub5">{TextForStep2.sub5} (line 44)</Link></li>
              <li hidden={this.props.xmlflag6}><Link onClick={this.closeModal} to="/tutorial/step2/sub6">{TextForStep2.sub6} (line 46 ~ 61)</Link></li>
            </div>
            {this.props.buttonLinks.next && <Link onClick={this.props.xmlSkip} to={this.props.buttonLinks.next} className={styles.modalFooter}>
            No, I want to skip those parts.
            </Link>}
          </div>{/*modal content*/}
        </div>{/*the modal*/}
        <ProgressBar percentage={this.props.percentage}/>
        <div onLoad={(this.props.buttonLinks.goback === '/tutorial/step2/sub6') ? this.props.completeAction : null} className={styles.child}>{this.props.children}</div>
        <div className={styles.btnContainer}>
          {/* Remove buttons on first and last step */}
          <div className={styles.btnSubCon}>
            {this.props.buttonLinks.previous && <Link to={this.props.buttonLinks.previous} className={styles.btnL}>BACK</Link>}
          </div>
          <div className={styles.btnSubCon}>
            {this.props.buttonLinks.goback && <Link to={this.props.buttonLinks.goback} className={styles.btn}> GO BACK AND SEE THE CHANGE</Link>}
          </div>
          <div className={styles.btnSubCon}>
            {
              (this.props.buttonLinks.next === '/tutorial/step3' &&
              ( this.props.xmlflag2 === false ||
                this.props.xmlflag3 === false ||
                this.props.xmlflag4 === false ||
                this.props.xmlflag5 === false ||
                this.props.xmlflag6 === false )) ?
                this.props.buttonLinks.next && <div onClick={this.openModal} className={styles.btnR}>NEXT</div> :
                this.props.buttonLinks.next && <Link to={this.props.buttonLinks.next} className={styles.btnR}>NEXT</Link>
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
  firstTaskCompleted: completedTaskSelector(),
  modalClick: modalClickSelector(),
  xmlflag2: xmlFlag2Selector(),
  xmlflag3: xmlFlag3Selector(),
  xmlflag4: xmlFlag4Selector(),
  xmlflag5: xmlFlag5Selector(),
  xmlflag6: xmlFlag6Selector(),
});

function mapDispatchToProps(dispatch) {
  return {
    completeAction: () => { dispatch({ type: FIRST_TASK_COMPLETED}); },
    modalAction: () => { dispatch({ type: MODAL_CLICK}); },
    xmlSkip: () => { dispatch({ type: XML_ALL_CLICK}); document.getElementById('myModal').style.display = 'none'; },
    xmlAction: (event) => { dispatch({ type: XML_CLICK, check: event.currentTarget.id});  },
  };
}

export default connect<{}, {}, TutorialProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Tutorial);
