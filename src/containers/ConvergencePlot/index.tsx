import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {chartDataSelector, domainXSelector, domainYSelector} from './selectors';
import {VictoryScatter, VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel} from 'victory';
import './styles.scss';

interface ConPlotProps {
  data: object[];
  domainX: number;
  domainY: number;
}

class ConPlot extends React.Component<ConPlotProps, any> {
    public render() {
      return (
        <VictoryChart
          theme={VictoryTheme.grayscale}
          domain={{x: [0, this.props.domainX], y: [0, this.props.domainY]}}
          padding={{left: 50, bottom: 40, top: 20, right: 20}}
          style={{
            data: {fill: 'red', opacity: 0.7},
            labels: {fontSize: 12},
          }}
        >
          <VictoryAxis
            dependentAxis={true}
            label="Iterations"
            fixLabelOverlap={true}
            axisLabelComponent={<VictoryLabel dy={-10} />}
          />
          <VictoryAxis
            crossAxis={true}
            label="Time Steps"
            fixLabelOverlap={true}
            axisLabelComponent={<VictoryLabel />}
          />
          <VictoryScatter
            style={{data: {fill: '#c43a31'}}}
            data={this.props.data}

          />
        </VictoryChart>
      );
  }
}

const mapStateToProps = createStructuredSelector ({
  data: chartDataSelector(),
  domainX: domainXSelector(),
  domainY: domainYSelector(),
});

function mapDispatchToProps( dispatch ) {
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(ConPlot);
