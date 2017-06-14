import * as React from 'react';

interface RootProps {
  children: any;
}
class Root extends React.Component<RootProps, undefined> {
  public render() {
    return (
      <div>
        <div>Header</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Root;
