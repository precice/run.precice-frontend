/**
 * Created by hasan on 07.03.18.
 */
import * as React from 'react';
import * as ReactGA from 'react-ga';
import {RouteComponentProps} from "react-router";

ReactGA.initialize('UA-115298536-1', {
  debug: true,
});


// ga.initialize('UA-115298536-1');

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends React.Component <RouteComponentProps<{}>, { } > {

    constructor(props) {
      super(props);
    }

    public componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    public componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

