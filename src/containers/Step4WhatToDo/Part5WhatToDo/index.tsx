import * as React from 'react';


interface Part5SubProps {
}

class Part5Sub extends React.Component<Part5SubProps, any> {
  public render() {
    return(
      <div>
        While the results are qualitatively similar to our last simulation with a serial coupling scheme, using a parallel coupling
        scheme has significantly reduced the runtime of the simulation.
      </div>
    );
  }
}

export default Part5Sub;


