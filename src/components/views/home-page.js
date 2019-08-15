import React, { Component } from 'react'

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Hola desde page mi querido {this.props.UserName}</p>
      </div>
    )
  }
}

export default HomePage