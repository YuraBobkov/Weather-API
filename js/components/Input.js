import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <input className="search" type="text" onKeyPress={this.onKeyPress} />
      </div>
    );
  }
}
