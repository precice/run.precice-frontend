import * as React from 'react';
import * as styles from './styles.scss';

import XmlBlockStatic from '../XmlBlockStatic/index';
import XmlBlockDynamic from '../XmlBlockDynamic/index';

import { config } from '../configurationFile/global_config'; 

interface XmlBlockProps {
  blockNumber: string;
  partNumber: number;
  changeBlockNumber: (partNumber: number, blockNumber: string) => void;
  xmlFlag: boolean[];
}

interface XmlBlockState {
  mouseOverLineIndex: {
    start: number; 
    end: number; 
  }
  hoverBlock: number; 
}

let lineIndex = [1, 1];

class XmlBlock extends React.Component<XmlBlockProps, XmlBlockState> {
  constructor(props: XmlBlockProps) {
    super(props);
    this.state = {
      mouseOverLineIndex: {
        start: 1,
        end: 1,
      },
      hoverBlock: 1
    };
    this.setMouseOver = this.setMouseOver.bind(this);
  }

  private setMouseOver(event) {
    if (!event.currentTarget.id) {
        return this.setState({mouseOverLineIndex: {
            start: 1,
            end: 1, 
        }, hoverBlock: undefined});
    }
    const hoverBlock = event.currentTarget.id.substring(3,4); 
    if (hoverBlock != this.state.hoverBlock) { 
        return this.setState({mouseOverLineIndex: {
            start: config[this.props.partNumber - 1]['sec' + event.currentTarget.id.substring(3, 4)]['start'] - 1,
            end: config[this.props.partNumber - 1]['sec' + event.currentTarget.id.substring(3, 4)]['end'] + 1,
        }, hoverBlock: hoverBlock });
    }
  }

  public componentDidMount() {
      if (this.props.blockNumber !== '1') { 
        this.scrollToCurrentBlock(); 
      }
  }

  public componentDidUpdate(oldProps, prevState) {
      if (oldProps.blockNumber !== this.props.blockNumber) {
         this.scrollToCurrentBlock();
     }
  }

  private scrollToCurrentBlock() {
    document.getElementById('xml' + this.props.blockNumber).scrollIntoView({behavior: 'auto', block: 'center'});
  }

  public render() {
    return (
      <div id="myXML"className={styles.xml}>
        {/* Evaluate current beginning and end of the currently selected block*/}
        <script>{lineIndex =  [( config[this.props.partNumber - 1]['sec' + this.props.blockNumber]['start'] - 1),
          (config[ this.props.partNumber - 1]['sec' + this.props.blockNumber]['end'] + 1) ] }
        </script>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="01" partNumber={this.props.partNumber}/>
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '1'); }}
          id="xml1"
        >
          <XmlBlockDynamic
            blockNumber="1"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 0 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="12" partNumber={this.props.partNumber}/>
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '2'); }}
          id="xml2"
        >
          <XmlBlockDynamic
            blockNumber="2"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 1 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="23" partNumber={this.props.partNumber} />
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '3'); }}
          id="xml3"
        >
          <XmlBlockDynamic
            blockNumber="3"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 2 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="34" partNumber={this.props.partNumber} />
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '4'); }}
          id="xml4"
        >
          <XmlBlockDynamic
            blockNumber="4"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 3 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="45" partNumber={this.props.partNumber} />
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '5'); }}
          id="xml5"
        >
          <XmlBlockDynamic
            blockNumber="5"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 4 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="56" partNumber={this.props.partNumber} />
        </div>
        <div
          onMouseOver={this.setMouseOver}
          onClick={() => { this.props.changeBlockNumber(this.props.partNumber, '6'); }}
          id="xml6"
        >
          <XmlBlockDynamic
            blockNumber="6"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
            isSeen={this.props.xmlFlag[ 5 ]} 
          />
        </div>
        <div onMouseOver={this.setMouseOver}>
        <XmlBlockStatic blockNumber="End" partNumber={this.props.partNumber}/>
        </div>
      </div>
    );
  }
}

export default XmlBlock;
