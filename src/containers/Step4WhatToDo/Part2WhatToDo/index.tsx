import * as React from 'react';


interface Part2SubProps {
}

class Part2Sub extends React.Component<Part2SubProps, any> {
  public render() {
    return(
      <div>
        Again, we see that the flap is bending under the pressure of the fluid. However,
        the deformation increases rapidly, the simulation diverges and produces unphysical results. This is because
        explicit coupling does not impose any convergence requirements on the solvers.
      </div>
    );
  }
}

export default Part2Sub;


