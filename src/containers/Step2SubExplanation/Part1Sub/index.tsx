import * as React from 'react';
import * as styles from '../styles.scss';

import Sub1 from './sub1/index';
import Sub2 from './sub2/index';
import Sub3 from './sub3/index';
import Sub4 from './sub4/index';
import Sub5 from './sub5/index';
import Sub6 from './sub6/index';

interface Part1SubProps {
  blockNumber: string;
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    switch (this.props.blockNumber) {
      case '1':
        return (<Sub1/>);
      case '2':
        return (<Sub2/>);
      case '3':
        return (<Sub3/>);
      case '4':
        return (<Sub4/>);
      case '5':
        return (<Sub5/>);
      case '6':
        return (<Sub6/>);
    }
  }
}

export default Part1Sub;

