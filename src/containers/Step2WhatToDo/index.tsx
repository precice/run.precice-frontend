import * as React from 'react';
import Part1WhatToDo from './Part1WhatToDo/index';
import Part2WhatToDo from './Part2WhatToDo/index';


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
    }

  }
}

export default Step2WhatToDoBlock;

