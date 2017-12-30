import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Step2WhatToDoBlock from '../Step2WhatToDo/index';
import Step3WhatToDoBlock from '../Step3WhatToDo/index';
import Step4WhatToDoBlock from '../Step4WhatToDo/index';


interface WhatToDoBlockProps {
  stepNumber: number;
  partNumber: number;
}

class WhatToDoBlock extends React.Component<WhatToDoBlockProps, any> {
  public render() {
    switch (this.props.stepNumber) {
      case 2 :
        return (<Step2WhatToDoBlock partNumber={this.props.partNumber}/>);
      case 3:
        return (<Step3WhatToDoBlock partNumber={this.props.partNumber}/>);
      case 4:
        return (<Step4WhatToDoBlock partNumber={this.props.partNumber}/>);
    }

  }
}


export default WhatToDoBlock;

