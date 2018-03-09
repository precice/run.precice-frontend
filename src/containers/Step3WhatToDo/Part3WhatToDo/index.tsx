import * as React from 'react';


interface Part3SubProps {
}

class Part3Sub extends React.Component<Part3SubProps, any> {
  public render() {
    return(
      <div>
        As mentioned in introduction to this section, an implicit coupling scheme performs several leads to several
        sub-iterations between the solvers in each time step. Here we have a added a plot that shows the number of
        coupling iterations in each time step.
      </div>
    );
  }
}

export default Part3Sub;


