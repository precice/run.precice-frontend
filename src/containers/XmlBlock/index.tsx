import * as React from 'react';
import * as styles from './styles.scss';

import XmlBlockStatic from '../XmlBlockStatic/index';
import XmlBlockDynamic from '../XmlBlockDynamic/index';

import * as config1 from '../configurationFile/config1';
import * as config2 from '../configurationFile/config2';
import * as config3 from '../configurationFile/config3';
import * as config4 from '../configurationFile/config4';
import * as config5 from '../configurationFile/config5';

interface XmlBlockProps {
  blockNumber: string;
  partNumber: number;
  blockNumberAction: () => void;
}

const initial1 = config1.initial;
const initial2 = config2.initial;
const initial3 = config3.initial;
const initial4 = config4.initial;
const initial5 = config5.initial;

let lineIndex = [1, 1, 1];

class XmlBlock extends React.Component<XmlBlockProps, any> {
  constructor(props: XmlBlockProps) {
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
    return this.setState({mouseOverLineIndex: {
      start: eval('config' + this.props.partNumber.toString() + '.sec' + event.currentTarget.id.substring(3, 4) + '.start - 1') ,
      end: eval('config' + this.props.partNumber.toString() + '.sec' + event.currentTarget.id.substring(3, 4) + '.end + 1'),
    }});
  }
  private setMouseOut(event) {
    this.setState({mouseOverLineIndex: {
      start: 1,
      end: 1,
    }});
  }
  public render() {
    return (
      <div className={styles.xml}>
        <script>{lineIndex = [eval('config' + this.props.partNumber + '.sec' + this.props.blockNumber + '.start - 1'),
          eval('config' + this.props.partNumber + '.sec' + this.props.blockNumber + '.end + 1')]
        }}</script>
        <XmlBlockStatic blockNumber="01" partNumber={this.props.partNumber}/>
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml1"
        >
          <XmlBlockDynamic
            blockNumber="1"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="12" partNumber={this.props.partNumber}/>
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml2"
        >
          <XmlBlockDynamic
            blockNumber="2"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="23" partNumber={this.props.partNumber} />
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml3"
        >
          <XmlBlockDynamic
            blockNumber="3"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="34" partNumber={this.props.partNumber} />
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml4"
        >
          <XmlBlockDynamic
            blockNumber="4"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="45" partNumber={this.props.partNumber} />
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml5"
        >
          <XmlBlockDynamic
            blockNumber="5"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="56" partNumber={this.props.partNumber} />
        <div
          onMouseOver={this.setMouseOver}
          onMouseOut={this.setMouseOut}
          onClick={this.props.blockNumberAction}
          id="xml6"
        >
          <XmlBlockDynamic
            blockNumber="6"
            lineIndexStart={lineIndex[0]}
            lineIndexEnd={lineIndex[1]}
            mouseOverLineIndexStart={this.state.mouseOverLineIndex.start}
            mouseOverLineIndexEnd={this.state.mouseOverLineIndex.end}
            partNumber={this.props.partNumber}
          />
        </div>
        <XmlBlockStatic blockNumber="End" partNumber={this.props.partNumber}/>
      </div>
    );
  }
}

export default XmlBlock;
