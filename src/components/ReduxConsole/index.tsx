import * as React from 'react';
import { List } from 'immutable';
import * as styles from './styles.scss';

export interface ConsoleChunk {
  key: string;
  content: string;
}

interface ReduxConsoleProps {
  busy: boolean;
  logMessages: List<string>;
  handler(input: string): void;
  promptLabel?: string;
  lockBottom: boolean;
  oldChunks: List<ConsoleChunk>;
  currentChunk: string;
  termWidth: number;
}


class ReduxConsole extends React.PureComponent<ReduxConsoleProps, undefined> {

  constructor(props:ReduxConsoleProps){
    super(props);
    this.onPress = this.onPress.bind(this);
    console.log(this.props.logMessages);
  }

  public onPress(e)
  {
    if ( e.keyCode == 13)
      this.props.handler('test');
  }

  private node: HTMLDivElement;

  public componentDidUpdate(prevProps) {
    // scroll onyl if not on the bottom
    const needScrolling = !( this.node.scrollHeight - this.node.scrollTop === this.node.clientHeight );
    if (this.props.lockBottom && needScrolling) {
      this.node.scrollTop = this.node.scrollHeight;
    }
  }

  public render() {
    return (
      <div
        className={styles.wrapper}
        ref={(ref) => { this.node = ref; }}
      >
        { (this.props.logMessages.size !== 0) &&
        <div className={styles.logMessages} style={{width: this.props.termWidth + "ch"}}> { this.props.logMessages.join('\n') } </div> }
        { !this.props.busy && (
          <div className={styles.prompt}
            onKeyDown={this.onPress}
            tabIndex={-1}>
            {this.props.promptLabel || '$'}
            <span className={styles.cursor}>&nbsp;</span>
          </div>
        ) }
      </div>
    );
  }
}

export default ReduxConsole;
