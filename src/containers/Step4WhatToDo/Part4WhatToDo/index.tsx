import * as React from 'react';


interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div>
        By changing the coupling scheme to quasi-Newton, we reproduced similar result, and we are able to decrease the
        running time of the simulation by ca. 10%.
      </div>
    );
  }
}

export default Part4Sub;


