import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PageContainer from '../pageviewer/page-container';
import DashboardContainer from '../dashboard/dashboard-container';
import LoginComponent from '../views/login-component';


export default class ContainerComponent extends PureComponent {
    constructor() {
        super()
        this.state = { isAuth: false, FullName: '' }
    }

    LoginFunc = () => {
        this.setState({ isAuth: true, FullName: 'Sebastian Loaiza' })
        //  window.location.replace('/pages/home');
    }

    validAuth = (props) => {
        if (this.state.isAuth) {
            return <PageContainer UserName={this.state.FullName} {...props} />
        } else {
            return <Redirect to="/login" />
         
        }
    }


    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={(props) => { return <LoginComponent LoginFunc={this.LoginFunc} {...props} />}} />
                    <Route path="/pages" component={(props) => { return this.validAuth(props) }} />
                    <Route path="/dashboard" component={DashboardContainer} />
                    <Route component={() => { return <div><p>No se encontro pagina</p></div> }} />
                </Switch>
            </Router>
        )
    }
}
