import React from 'react';
import { Button } from 'react-onsenui';

class MainApp extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
  }

  _onClick = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <Button onClick={this._onClick}>Tap me!</Button>
      </div>
    );
  }

}
export default MainApp;
