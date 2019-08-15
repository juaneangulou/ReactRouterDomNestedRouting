import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeDashboard from '../views/home-dashboard';

export default class DashboardContainer extends Component {
   

    render() {
        return (
            <Router>
                <Route exact path="/dashboard/home" component={HomeDashboard} />
            </Router>
        )
    }
}
