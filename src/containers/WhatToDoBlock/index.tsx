import * as React from 'react';
import { Tooltip } from 'react-tippy';
import Step2WhatToDo from '../Step2WhatToDo/index';
import Step3WhatToDo from '../Step3WhatToDo/index';
import Step4WhatToDo from '../Step4WhatToDo/index';


interface WhatToDoBlockProps {
  stepNumber: number;
  partNumber: number;
}

class WhatToDoBlock extends React.Component<WhatToDoBlockProps, any> {
  public render() {
    switch (this.props.stepNumber) {
      case 2 :
        return (<Step2WhatToDo partNumber={this.props.partNumber}/>);
      case 3:
        return (<Step3WhatToDo partNumber={this.props.partNumber}/>);
      case 4:
        return (<Step4WhatToDo partNumber={this.props.partNumber}/>);
    }

  }
}


export default WhatToDoBlock;

