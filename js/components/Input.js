import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  onKeyPress(e) {
    if (e.nativeEvent.keyCode === 13) {
      this.props.getCities(e.target.value);
    }
  }
  render() {
    return (
      <div >
        <input className="search" type="text" onKeyPress={this.onKeyPress} />
      </div>
    );
  }
}
