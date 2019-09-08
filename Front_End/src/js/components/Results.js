import React from 'react';
import '../../App.css';

export default class Results extends React.Component {

  render() {
    return (
        <div>
            {this.props.results}
        </div>
    );
  }
}