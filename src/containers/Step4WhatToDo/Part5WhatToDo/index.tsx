import * as React from 'react';


interface Part5SubProps {
}

class Part5Sub extends React.Component<Part5SubProps, any> {
  public render() {
    return(
      <div>
        By changing the coupling scheme to parallel quasi-Newton, we again reproduced similar result. This time we are
        able to speedup the simulation by a factor of two.
      </div>
    );
  }
}

export default Part5Sub;


