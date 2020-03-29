import * as React from 'react';


interface Part4SubProps {
}

class Part4Sub extends React.Component<Part4SubProps, any> {
  public render() {
    return(
      <div>
        As you can see, changing the acceleration method to Quasi-Newton gives similar results as the last section. This is
        in line with what we would've predicted before running the simulation.
      </div>
    );
  }
}

export default Part4Sub;


