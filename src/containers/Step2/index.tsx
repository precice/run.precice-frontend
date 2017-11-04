import { connect } from 'react-redux';
import { HID_CHECK2, XML_CLICK } from '../constants';
import { createStructuredSelector } from 'reselect';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburst } from 'react-syntax-highlighter/dist/styles/';
import * as TextForStep2 from './TextForStep2';
import {
  lineSelector,
  titleSelector,
  hidCheckSelector,
  xmlFlag1Selector,
  xmlFlag2Selector,
  xmlFlag3Selector,
  xmlFlag4Selector,
  xmlFlag5Selector,
  xmlFlag6Selector} from './selectors';
import {
  completedTaskSelector,
  modalClickSelector} from '../Tutorial/selectors';

interface Step2Props {
  lineIndex: {
    start: number,
    end: number,
    section: string,
  };
  hidAction: () => void;
  hidCheck2: boolean;
  subStepTitle: string;
  firstTaskCompleted: boolean;
  modalClick: boolean;
  xmlAction: () => void;
  xmlflag1: boolean;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
}

let whichSection = '';

class Step2 extends React.Component<Step2Props, any> {
  constructor(props: Step2Props) {
    super(props);
    this.state = {
      mouseOverLineIndex: {
        start: 1,
        end: 1,
      },
    };
    this.setMouseOver = this.setMouseOver.bind(this);
    this.setMouseOut = this.setMouseOut.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.overlayButtonColorChange = this.overlayButtonColorChange.bind(this);
    this.overlayButtonColorOriginal = this.overlayButtonColorOriginal.bind(this);
  }
  private setMouseOver(event) {
    switch (event.currentTarget.id) {
      case 'xml1': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec1.start - 1 ,
          end: TextForStep2.sec1.end + 1,
        }});
      }
      case 'xml2': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec2.start - 1,
          end: TextForStep2.sec2.end + 1,
        }});
      }
      case 'xml3': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec3.start - 1,
          end: TextForStep2.sec3.end + 1,
        }});
      }
      case 'xml4': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec4.start - 1,
          end: TextForStep2.sec4.end + 1,
        }});
      }
      case 'xml5': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec5.start - 1,
          end: TextForStep2.sec5.end + 1,
        }});
      }
      case 'xml6': {
        return this.setState({mouseOverLineIndex: {
          start: TextForStep2.sec6.start - 1,
          end: TextForStep2.sec6.end + 1,
        }});
      }
    }
  }
  private setMouseOut(event) {
    this.setState({mouseOverLineIndex: {
      start: 1,
      end: 1,
    }});
  }
  private closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
  }
  private overlayButtonColorChange() {
    document.getElementById('overlayButton').style.color = 'gray';
  }
  private overlayButtonColorOriginal() {
    document.getElementById('overlayButton').style.color = 'white';
  }
  public render() {
    return (
      <div onMouseOver={this.props.xmlAction} className={styles.subContainer}>
        {!this.props.firstTaskCompleted ?
        <div id="overlay" className={styles.overlay}>
          <div className={styles.overlayLanding}>This is a small guide on how to use the website</div>
          <div className={styles.overlayIntro}>You can hide this box by clicking HIDE</div>
          <div className={styles.overlayXml}>By clicking these lines, <br/>you can see explanation of the section you click on the left</div>
          <div className={styles.overlayExp}>You can see explanation for each line.
          Also, you can click on <span className="fa fa-question-circle" style={{ fontSize: '18px' }}/> to get further information.</div>
          <div id="overlayButton"onClick={this.closeOverlay} onMouseOver={this.overlayButtonColorChange} onMouseOut={this.overlayButtonColorOriginal} className={styles.overlayButton}>I'VE READ</div>
        </div> :
          <div/>}
        <script>{whichSection = this.props.lineIndex.section}</script>
        <div className={styles.expContainer}>
          <div className={styles.expHeader}>
            <span className={styles.hide}/>
            <span className={styles.title}>what to do</span>
            <span onClick={this.props.hidAction} className={styles.hide}>{this.props.hidCheck2 ? 'expand' : 'hide'}
            </span>
          </div>
          <div id="hideStep2" className={styles.expContent} hidden={this.props.hidCheck2}>
            preCICE is set up via a precice-config.xml file. It contains most of the settings preCICE needs to run the
            coupled simulation. However, we still need solvers specific configuartion file, that we will not discuss in this tutorial.
            <br/>
            Click on the XML file, you will learn how to set up the configuration file.
            <br/>
            <li><Link to="/tutorial/step2/sub1" className={styles.link}>{TextForStep2.sub1} (line 5 ~ 9)</Link></li>
            <li><Link to="/tutorial/step2/sub2" className={styles.link}>{TextForStep2.sub2} (line 12 ~ 20)</Link></li>
            <li><Link to="/tutorial/step2/sub3" className={styles.link}>{TextForStep2.sub3} (line 26 ~ 35)</Link></li>
            <li><Link to="/tutorial/step2/sub4" className={styles.link}>{TextForStep2.sub4} (line 37 ~ 40)</Link></li>
            <li><Link to="/tutorial/step2/sub5" className={styles.link}>{TextForStep2.sub5} (line 44)</Link></li>
            <li><Link to="/tutorial/step2/sub6" className={styles.link}>{TextForStep2.sub6} (line 46 ~ 61)</Link></li>
          </div>
        </div>
        <div className={styles.interactContainer}>
          <div className={styles.xml}>
            <SyntaxHighlighter
              id="xml0"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                if (lineNumber > this.props.lineIndex.start && lineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (lineNumber > this.state.mouseOverLineIndex.start && lineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString0}
            </SyntaxHighlighter>{/*text01*/}
            <Link to="/tutorial/step2/sub1">
              <SyntaxHighlighter
                id="xml1"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec1.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec01.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
              {TextForStep2.initialCodeString1}
              </SyntaxHighlighter>{/*text1*/}
            </Link>
            <SyntaxHighlighter
              id="xml12"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec12.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec1.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString12}
            </SyntaxHighlighter>{/*text12*/}
            <Link to="/tutorial/step2/sub2">
              <SyntaxHighlighter
                id="xml2"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec2.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec12.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  } else if (this.props.modalClick &&
                              !this.props.xmlflag2 &&
                          (localLineNumber > TextForStep2.sec2.start - 1 && localLineNumber < TextForStep2.sec2.end + 1)) {
                    style.backgroundColor = '#931131';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString2}
              </SyntaxHighlighter>{/*text2*/}
            </Link>
            <SyntaxHighlighter
              id="xml23"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec23.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec2.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString23}
            </SyntaxHighlighter>{/*text23*/}
            <Link to="/tutorial/step2/sub3">
              <SyntaxHighlighter
                id="xml3"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec3.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec23.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  }else if (this.props.modalClick &&
                    !this.props.xmlflag3 &&
                    (localLineNumber > TextForStep2.sec3.start - 1 && localLineNumber < TextForStep2.sec3.end + 1)) {
                    style.backgroundColor = '#931131';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString3}
              </SyntaxHighlighter>{/*text3*/}
            </Link>
            <SyntaxHighlighter
              id="xml34"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec34.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec3.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString34}
            </SyntaxHighlighter>{/*text34*/}
            <Link to="/tutorial/step2/sub4">
              <SyntaxHighlighter
                id="xml4"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec4.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec34.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag4 &&
                    (localLineNumber > TextForStep2.sec4.start - 1 && localLineNumber < TextForStep2.sec4.end + 1)) {
                    style.backgroundColor = '#931131';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString4}
              </SyntaxHighlighter>{/*text4*/}
            </Link>
            <SyntaxHighlighter
              id="xml45"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec45.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec4.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString45}
            </SyntaxHighlighter>{/*text45*/}
            <Link to="/tutorial/step2/sub5">
              <SyntaxHighlighter
                id="xml5"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec5.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec45.end;
                  if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag5 &&
                    (localLineNumber > TextForStep2.sec5.start - 1 && localLineNumber < TextForStep2.sec5.end + 1)) {
                    style.backgroundColor = '#931131';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {TextForStep2.initialCodeString5}
              </SyntaxHighlighter>{/*text5*/}
            </Link>
            <SyntaxHighlighter
              id="xml56"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec56.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec5.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeString56}
            </SyntaxHighlighter>{/*text56*/}
            <Link to="/tutorial/step2/sub6">
              <SyntaxHighlighter
                id="xml6"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={TextForStep2.sec6.start}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + TextForStep2.sec56.end;
                  if (this.props.firstTaskCompleted && localLineNumber === 60 ) {
                    style.backgroundColor = '#e8e8e8';
                  } else if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                    style.backgroundColor = '#505050';
                  } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                    style.backgroundColor = '#505050';
                  } else if (this.props.modalClick &&
                    !this.props.xmlflag6 &&
                    (localLineNumber > TextForStep2.sec6.start - 1 && localLineNumber < TextForStep2.sec6.end + 1)) {
                    style.backgroundColor = '#931131';
                  }
                  return style;
                }}
                onMouseOver={this.setMouseOver}
                onMouseOut={this.setMouseOut}
              >
                {this.props.firstTaskCompleted ? TextForStep2.initialCodeString6After : TextForStep2.initialCodeString6Before}
              </SyntaxHighlighter>{/*text6*/}
            </Link>
            <SyntaxHighlighter
              id="xmlEnd"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={TextForStep2.sec60.start}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + TextForStep2.sec6.end;
                if (localLineNumber > this.props.lineIndex.start && localLineNumber < this.props.lineIndex.end ) {
                  style.backgroundColor = '#505050';
                } else if (localLineNumber > this.state.mouseOverLineIndex.start && localLineNumber < this.state.mouseOverLineIndex.end) {
                  style.backgroundColor = '#505050';
                }
                return style;
              }}
              onMouseOver={this.setMouseOver}
              onMouseOut={this.setMouseOut}
            >
              {TextForStep2.initialCodeStringEnd}
            </SyntaxHighlighter>{/*textend*/}
          </div>{/*XML*/}
          <div className={styles.commentContainer}>
            <div className={styles.commentHeader}>
              {this.props.subStepTitle}
            </div>
            <div className={styles.exp}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  lineIndex: lineSelector(),
  subStepTitle: titleSelector(),
  hidCheck2: hidCheckSelector(),
  xmlflag1: xmlFlag1Selector(),
  xmlflag2: xmlFlag2Selector(),
  xmlflag3: xmlFlag3Selector(),
  xmlflag4: xmlFlag4Selector(),
  xmlflag5: xmlFlag5Selector(),
  xmlflag6: xmlFlag6Selector(),
  firstTaskCompleted: completedTaskSelector(),
  modalClick: modalClickSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    hidAction: () => { dispatch({ type: HID_CHECK2, check: document.getElementById('hideStep2').hidden}); },
    xmlAction: () => { dispatch({ type: XML_CLICK, check: whichSection}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

