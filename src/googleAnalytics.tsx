/**
 * Created by hasan on 07.03.18.
 */
import * as React from 'react';
import * as ReactGA from 'react-ga';
import {RouteComponentProps} from 'react-router';

if (window.location.hostname === 'localhost' ) {
  window ['ga-disable-UA-115298536-1'] = true;
}

ReactGA.initialize('UA-115298536-1', {
  debug: false,
  gaOptions: {
    cookieDomain: 'auto',
  },
});

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends React.Component <any, undefined > {

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

export default withTracker;
