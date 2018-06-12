import * as React from 'react';
import * as styles from './styles.scss';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { sunburstModified } from '../Step2/styleForSyntaxHighlighter';
import { xmlHoverBackground, xmlSelectedBackground, xmlSeenColor, xmlSeenHover} from '../constants';

import { config } from '../configurationFile/global_config'; 

interface XmlBlockDynamicProps {
  blockNumber: string;
  lineIndexStart: number;
  lineIndexEnd: number;
  mouseOverLineIndexStart: number;
  mouseOverLineIndexEnd: number;
  partNumber: number;
  isSeen: boolean; 
}

class XmlBlockDynamic extends React.Component<XmlBlockDynamicProps, any> {
  public render() {
    if (config[ this.props.partNumber - 1]['sec' + this.props.blockNumber].total === 0) {
      return <div/>; } else {
        const secStart = config[ this.props.partNumber - 1]['sec' + this.props.blockNumber].start - 1;
        const secEnd =   config[ this.props.partNumber - 1]['sec' + this.props.blockNumber].end + 1;
        const isSelected = ( (this.props.lineIndexStart == secStart ) && (this.props.lineIndexEnd == secEnd) )
        const isHover = ( (this.props.mouseOverLineIndexStart == secStart ) && (this.props.mouseOverLineIndexEnd == secEnd) )
        const xmlHover = this.props.isSeen? xmlSeenHover : xmlHoverBackground;

    return (
      <div className={styles.hlcontainer} style={{backgroundColor: isSelected? xmlSelectedBackground : isHover? xmlHover :  this.props.isSeen? xmlSeenColor: ''}}> 
        <div className={styles.hltag}> 
          {
            isSelected ? 
            <i className="fa fa-check-circle" style={{fontSize: '24px', color: '#dddddd', visibility: 'hidden'}}></i> : 
            this.props.isSeen ? 
            <i className="fa fa-check-circle" style={{fontSize: '30px', color: 'green'}}></i>: 
            <div/>
          }
        </div>
      <SyntaxHighlighter
        style={sunburstModified}
        customStyle={{padding: '0px 0px'}} 
        startingLineNumber={config[ this.props.partNumber - 1]['sec' + this.props.blockNumber].start}
        language="xml"
        className={styles.highlighter}
        wrapLines={true}
        lineStyle={{ display: 'block', backgroundColor: isSelected? xmlSelectedBackground : isHover ? xmlHover : this.props.isSeen? xmlSeenColor: ''}}
      >
        {/* Display correpposnding part of the xml file */}
        {config[ this.props.partNumber - 1]['initialCodeString' + this.props.blockNumber]}
      </SyntaxHighlighter>
    </div>
    ); }
  }
}

export default XmlBlockDynamic;
