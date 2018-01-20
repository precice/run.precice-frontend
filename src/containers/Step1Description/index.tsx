import * as React from 'react';
import Part1Description from './Part1Description/index';
import Part2Description from './Part2Description/index';
import Part3Description from './Part3Description/index';
import Part4Description from './Part4Description/index';
import Part5Description from './Part5Description/index';


interface Step1DescriptionProps {
  partNumber: number;
}

class Step1Description extends React.Component<Step1DescriptionProps, any> {
  public render() {
    switch (this.props.partNumber) {
      case 1 :
        return (<Part1Description/>);
      case 2:
        return (<Part2Description/>);
      case 3:
        return (<Part3Description/>);
      case 4:
        return (<Part4Description/>);
      case 5:
        return (<Part5Description/>);
    }

  }
}

export default Step1Description;

