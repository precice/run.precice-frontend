import * as React from 'react';


interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <div>
        Again, we see that the flap is bending under the pressure of the fluid. However,
        the deformation increases rapidly, the simulation diverges and produces unphysical result. The main reason for
        this is explicit coupling that doesn't impose any convergence requirement on both solvers.
      </div>
    );
  }
}

export default Part2Sub;


