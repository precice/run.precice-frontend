import * as React from 'react';
import Part1WhatToDo from './Part1WhatToDo/index';
import Part2WhatToDo from './Part2WhatToDo/index';

interface Step3WhatToDoBlockProps {
  partNumber: number;
}

class Step3WhatToDoBlock extends React.Component<Step3WhatToDoBlockProps, any> {
  public render() {
    switch (this.props.partNumber) {
      case 1 :
        return (<Part1WhatToDo/>);
      case 2:
        return (<Part2WhatToDo/>);
    }

  }
}

export default Step3WhatToDoBlock;

