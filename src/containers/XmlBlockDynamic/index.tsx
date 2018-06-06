import * as React from 'react';
import * as styles from './styles.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import { xmlHoverBackground, xmlSelectedBackground, xmlSeenColor, xmlSeenHover} from '../constants';

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
  isSeen: boolean; 
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
        const secStart = eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start') - 1;
        const secEnd =   eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.end') + 1;
        const isSelected = ( (this.props.lineIndexStart == secStart ) && (this.props.lineIndexEnd == secEnd) )
        const isHover = ( (this.props.mouseOverLineIndexStart == secStart ) && (this.props.mouseOverLineIndexEnd == secEnd) )
        const xmlHover = this.props.isSeen? xmlSeenHover : xmlHoverBackground;

    return (
      <div className={styles.hlcontainer} style={{backgroundColor: isSelected? xmlSelectedBackground : isHover? xmlHover :  this.props.isSeen? xmlSeenColor: ''}}> 
        <div className={styles.hltag}> 
          {
            isSelected ? 
            <i className="fa fa-eye" style={{fontSize: '24px', color: '#dddddd'}}></i> : 
            this.props.isSeen ? 
            <i className="fa fa-check-circle" style={{fontSize: '30px', color: 'green'}}></i>: 
            <div/>
          }
          {/* <i className="fa fa-circle" style={{fontSize: '24px', color: 'green'}}></i> */}  
        </div>
      <SyntaxHighlighter
        style={sunburstModified}
        customStyle={{padding: '0px 0px'}} 
        startingLineNumber={eval('config' + this.props.partNumber.toString() + '.sec' + this.props.blockNumber + '.start')}
        language="xml"
        className={styles.highlighter}
        wrapLines={true}
        lineStyle={{ display: 'block', backgroundColor: isSelected? xmlSelectedBackground : isHover ? xmlHover : this.props.isSeen? xmlSeenColor: ''}}
      >
        {/* Display correpposnding part of the xml file */}
        {eval('config' + this.props.partNumber.toString() + '.initialCodeString' + this.props.blockNumber)}
      </SyntaxHighlighter>
    </div>
    ); }
  }
}

export default XmlBlockDynamic;
