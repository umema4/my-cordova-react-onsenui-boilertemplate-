import React from 'react';
import { Page } from 'react-onsenui';
import { connect } from 'react-redux';

import MainApp from '../components/MainApp';
import {
  incrementAsync,
} from '../actions/Count';

require('onsenui');

class MainAppContainer extends React.Component {

  static propTypes = {
    count: React.PropTypes.number,
  }

  static contextTypes = {
    store: React.PropTypes.object,
  }

  _onClick = () => {
    this.context.store.dispatch(incrementAsync())
    .then(() => {
      console.log('done');
    });
  }

  render() {
    return (
      <Page>
        {this.props.count}
        <MainApp
          onClick={this._onClick}
        />
      </Page>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(MainAppContainer);
