import * as React from 'react';

interface Part1SubProps {
}

class Part1Sub extends React.Component<Part1SubProps, any> {
  public render() {
    return (
      <div>
        Once we have configured preCICE, we are ready to start our first coupled simulation. To achieve this,
        we will simultaneously run both SU2 and CalculiX. The easiest way to achieve this is to run
        them in separate terminals. The order in which we start our solvers does not matter.
        The solver we start first will run until it needs to communicate with the other one and will then wait until
        it receives the required data.
        <br/>
        <br/>
        To make it more convenient, we have already typed in the commands to start the two solvers in the terminals below.
        Just click on the corresponding terminal and press <span style={{fontStyle: "italic"}}> Return </span> key to start the solver.
        <br/>
        <br/>
        Once you've started the simulation, you will be able to see SU2 and CalculiX specific output in the corresponding
        terminals.
      </div>
    );
  }
}

export default Part1Sub;

