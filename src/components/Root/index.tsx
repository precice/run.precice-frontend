import * as React from 'react';

interface rootProps {
  children: any,
}
class Root extends React.Component<rootProps, undefined> {
  render() {
    return <div> Test </div>;
  }
}

export default Root;
