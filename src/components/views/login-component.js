import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.LoginFunc();
                    this.props.history.push(`/pages/home`)
                }}>Entrar</button>
            </div>
        )
    }
}
