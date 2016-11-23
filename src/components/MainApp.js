import React from 'react';
import ons from 'onsenui';
import { Page, Button } from 'react-onsenui';

require('onsenui');

class MainApp extends React.Component {

  _onClick() {
    ons.notification.alert('Hello world!');
  }

  render() {
    return (
      <Page>
        <Button onClick={this._onClick}>Tap me!</Button>
      </Page>
    );
  }

}
export default MainApp;
