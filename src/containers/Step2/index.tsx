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

interface Step2Props {
  lineIndex: {
    start: number,
    end: number,
  };
  hidAction: () => void;
  hidCheck2: boolean;
  subStepTitle: string;
  xmlAction: () => void;
  xmlflag1: boolean;
  xmlflag2: boolean;
  xmlflag3: boolean;
  xmlflag4: boolean;
  xmlflag5: boolean;
  xmlflag6: boolean;
}

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
  }
  private setMouseOver(event) {
    switch (event.currentTarget.id) {
      case 'xml1': {
        return this.setState({mouseOverLineIndex: {
          start: 4,
          end: 10,
        }});
      }
      case 'xml2': {
        return this.setState({mouseOverLineIndex: {
          start: 11,
          end: 21,
        }});
      }
      case 'xml3': {
        return this.setState({mouseOverLineIndex: {
          start: 25,
          end: 36,
        }});
      }
      case 'xml4': {
        return this.setState({mouseOverLineIndex: {
          start: 36,
          end: 42,
        }});
      }
      case 'xml5': {
        return this.setState({mouseOverLineIndex: {
          start: 43,
          end: 45,
        }});
      }
      case 'xml6': {
        return this.setState({mouseOverLineIndex: {
          start: 45,
          end: 62,
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

  public render() {
    return (
      <div className={styles.subContainer}>
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
            <li><Link to="/tutorial/step2/sub1" className={styles.link}>{TextForStep2.sub1}</Link></li>
            <li><Link to="/tutorial/step2/sub2" className={styles.link}>{TextForStep2.sub2}</Link></li>
            <li><Link to="/tutorial/step2/sub3" className={styles.link}>{TextForStep2.sub3}</Link></li>
            <li><Link to="/tutorial/step2/sub4" className={styles.link}>{TextForStep2.sub4}</Link></li>
            <li><Link to="/tutorial/step2/sub5" className={styles.link}>{TextForStep2.sub5}</Link></li>
            <li><Link to="/tutorial/step2/sub6" className={styles.link}>{TextForStep2.sub6}</Link></li>
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
            <Link id="xmlflag1" onClick={this.props.xmlAction} to="/tutorial/step2/sub1">
              <SyntaxHighlighter
                id="xml1"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={5}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 4;
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
              startingLineNumber={10}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 9;
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
            <Link id="xmlflag2" onClick={this.props.xmlAction} to="/tutorial/step2/sub2">
              <SyntaxHighlighter
                id="xml2"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={12}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 11;
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
                {TextForStep2.initialCodeString2}
              </SyntaxHighlighter>{/*text2*/}
            </Link>
            <SyntaxHighlighter
              id="xml23"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={21}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 20;
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
            <Link id="xmlflag3" onClick={this.props.xmlAction} to="/tutorial/step2/sub3">
              <SyntaxHighlighter
                id="xml3"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={26}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 25;
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
                {TextForStep2.initialCodeString3}
              </SyntaxHighlighter>{/*text3*/}
            </Link>
            <SyntaxHighlighter
              id="xml34"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={36}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 35;
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
            <Link id="xmlflag4" onClick={this.props.xmlAction} to="/tutorial/step2/sub4">
              <SyntaxHighlighter
                id="xml4"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={37}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 36;
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
                {TextForStep2.initialCodeString4}
              </SyntaxHighlighter>{/*text4*/}
            </Link>
            <SyntaxHighlighter
              id="xml45"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={42}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 41;
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
            <Link id="xmlflag5" onClick={this.props.xmlAction} to="/tutorial/step2/sub5">
              <SyntaxHighlighter
                id="xml5"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={44}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 43;
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
                {TextForStep2.initialCodeString5}
              </SyntaxHighlighter>{/*text5*/}
            </Link>
            <SyntaxHighlighter
              id="xml56"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={45}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 44;
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
            <Link id="xmlflag6" onClick={this.props.xmlAction} to="/tutorial/step2/sub6">
              <SyntaxHighlighter
                id="xml6"
                style={TextForStep2.sunburstModified}
                showLineNumbers="true"
                startingLineNumber={46}
                language="xml"
                className={styles.highlighter}
                wrapLines={true}
                lineStyle={lineNumber => {
                  const style = { display: 'block', backgroundColor: '' };
                  const localLineNumber = lineNumber + 45;
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
                {TextForStep2.initialCodeString6}
              </SyntaxHighlighter>{/*text6*/}
            </Link>
            <SyntaxHighlighter
              id="xmlEnd"
              style={TextForStep2.sunburstModified}
              showLineNumbers="true"
              startingLineNumber={62}
              language="xml"
              className={styles.highlighter}
              wrapLines={true}
              lineStyle={lineNumber => {
                const style = { display: 'block', backgroundColor: '' };
                const localLineNumber = lineNumber + 61;
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
});

function mapDispatchToProps(dispatch) {
  return {
    hidAction: () => { dispatch({ type: HID_CHECK2, check: document.getElementById('hideStep2').hidden}); },
    xmlAction: (event) => { dispatch({ type: XML_CLICK, check: event.currentTarget.id}); },
  };
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(Step2);

