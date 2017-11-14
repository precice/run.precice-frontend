import * as React from 'react';
import { List } from 'immutable';
import * as styles from './styles.scss';

interface ReduxConsoleProps {
  busy: boolean;
  logMessages: [string];
  handler(input: string): void;
  promptLabel?: string;
  lockBottom: boolean;
}


class ReduxConsole extends React.PureComponent<ReduxConsoleProps, undefined> {

  private bottomAnchor: HTMLDivElement;

  public componentDidUpdate(prevProps) {
    if (this.props.lockBottom) {
      this.bottomAnchor.scrollIntoView();
    }
  }

  public render() {


    return (
      <div className={styles.wrapper}>
        <div className={styles.logMessages}>{this.props.logMessages.join('\n')}</div>
        {!this.props.busy && (
          <div onClick={() => { this.props.handler('test'); }} className={styles.prompt}>
            {this.props.promptLabel || '$'}
            <span className={styles.cursor}>&nbsp;</span>
          </div>
        )}
        <div ref={(node) => { this.bottomAnchor = node; }} className={styles.bottomAnchor}>&nbsp;</div>
      </div>
    );
  }
}

export default ReduxConsole;

