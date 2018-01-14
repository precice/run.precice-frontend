import * as React from 'react';
import Part1WhatToDo from './Part1WhatToDo/index';
import Part2WhatToDo from './Part2WhatToDo/index';
import Part3WhatToDo from './Part3WhatToDo/index';
import Part4WhatToDo from './Part4WhatToDo/index';
import Part5WhatToDo from './Part5WhatToDo/index';


interface Step2WhatToDoBlockProps {
  partNumber: number;
}

class Step2WhatToDoBlock extends React.Component<Step2WhatToDoBlockProps, any> {
  public render() {
    switch (this.props.partNumber) {
      case 1 :
        return (<Part1WhatToDo/>);
      case 2:
        return (<Part2WhatToDo/>);
      case 3:
        return (<Part3WhatToDo/>);
      case 4:
        return (<Part4WhatToDo/>);
      case 5:
        return (<Part5WhatToDo/>);
    }

  }
}

export default Step2WhatToDoBlock;

