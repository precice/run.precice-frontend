import * as React from 'react';
import { List } from 'immutable';
import * as styles from './styles.scss';

export interface ConsoleChunk {
  key: string;
  content: string;
}

interface ReduxConsoleProps {
  busy: boolean;
  logMessages: [string];
  handler(input: string): void;
  promptLabel?: string;
  lockBottom: boolean;
  oldChunks: [ConsoleChunk];
}


class ReduxConsole extends React.PureComponent<ReduxConsoleProps, undefined> {

  private node: HTMLDivElement;

  public componentDidUpdate(prevProps) {
    if (this.props.lockBottom) {
      this.node.scrollTop = this.node.scrollHeight;
    }
  }

  public render() {

    return (
      <div
        className={styles.wrapper}
        ref={(ref) => { this.node = ref; }}
        tabIndex={-1}
        onKeyDown={(e) => { if (e.keyCode === 13) { this.props.handler('test'); } }}
      >
        {!this.props.busy && this.props.oldChunks.map(oC => (<div className={styles.logMessages} key={oC.key}>{oC.content}</div>))}
        <div className={styles.logMessages}>{this.props.logMessages.join('\n')}</div>
        {!this.props.busy && (
          <div className={styles.prompt}>
            {this.props.promptLabel || '$'}
            <span className={styles.cursor}>&nbsp;</span>
          </div>
        )}
      </div>
    );
  }
}

export default ReduxConsole;

