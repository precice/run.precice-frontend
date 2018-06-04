import * as React from 'react';
import * as styles from './styles.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import { xmlHoverBackground, xmlSelectedBackground } from '../constants';

import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import * as config3 from '../configurationFile/config3';
import * as config4 from '../configurationFile/config4';
import * as config5 from '../configurationFile/config5';

interface XmlBlockDynamicProps {
  blockNumber: string;
  lineIndexStart: number;
  lineIndexEnd: number;
  mouseOverLineIndexStart: number;
  mouseOverLineIndexEnd: number;
  partNumber: number;
}

// this part is essential for eval
const initial1 = config1.initial;
const initial2 = config2.initial;
const initial3 = config3.initial;
const initial4 = config4.initial;
const initial5 = config5.initial;


class XmlBlockDynamic extends React.Component<XmlBlockDynamicProps, any> {
  public render() {
    if (eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.total') === 0) {
      return <div/>; } else {
    return (
      <SyntaxHighlighter
        style={sunburstModified}
        showLineNumbers="true"
        startingLineNumber={eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start')}
        language="xml"
        className={styles.highlighter}
        wrapLines={true}
        lineStyle={lineNumber => {
          const style = { display: 'block', backgroundColor: '' };
          const localLineNumber = lineNumber + eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start') - 1;
          {/* If the line number, that is selected does not match the range of this block, we display is as static */}
          {/* or if we are hovering over that block */}
          if (localLineNumber > this.props.lineIndexStart && localLineNumber < this.props.lineIndexEnd ) {
            style.backgroundColor = xmlSelectedBackground;
          } else if (localLineNumber > this.props.mouseOverLineIndexStart && localLineNumber < this.props.mouseOverLineIndexEnd) {
            style.backgroundColor = xmlHoverBackground;
          }
          return style;
        }}
      >
        {/* Display correpposnding part of the xml file */}
        {eval('config' + this.props.partNumber.toString() + '.initialCodeString' + this.props.blockNumber)}
      </SyntaxHighlighter>
    ); }
  }
}

export default XmlBlockDynamic;
