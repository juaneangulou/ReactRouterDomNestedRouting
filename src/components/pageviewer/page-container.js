import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from '../views/home-page';

export default class PageContainer extends Component {
   constructor(props){
       super(props);
   }

    render() {
        return (
            <Router>
                <Route exact path="/pages/home" component={(props)=>{return <HomePage UserName={this.props.UserName} {...props}/>}} />
            </Router>
        )
    }
}
