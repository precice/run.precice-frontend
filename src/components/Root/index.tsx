import * as React from 'react';

interface rootProps {
  children: any,
}
class Root extends React.Component<rootProps, undefined> {
  render() {
    return <div>
      <div>Header</div>
      <div>{this.props.children}</div>
      </div>;
  }
}

export default Root;
