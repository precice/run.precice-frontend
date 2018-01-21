import * as React from 'react';
import Part1Vis from './Part1Vis/index';
import Part2Vis from './Part2Vis/index';
import Part3Vis from './Part3Vis/index';
import Part4Vis from './Part4Vis/index';
import Part5Vis from './Part5Vis/index';

interface Step4WhatToDoBlockProps {
  partNumber: number;
}

class Step4WhatToDoBlock extends React.Component<Step4WhatToDoBlockProps, any> {
  public render() {
    switch (this.props.partNumber) {
      case 1 :
        return (<Part1Vis/>);
      case 2:
        return (<Part2Vis/>);
      case 3:
        return (<Part3Vis/>);
      case 4:
        return (<Part4Vis/>);
      case 5:
        return (<Part5Vis/>);
    }

  }
}


export default Step4WhatToDoBlock;

