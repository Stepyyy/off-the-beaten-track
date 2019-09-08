import React from 'react';
import '../../App.css';
import Title from "./Header/Title";

export default class Header extends React.Component {

  render() {
    return (
        <div>
          <Title title={this.props.title} />
        </div>
    );
  }
}


