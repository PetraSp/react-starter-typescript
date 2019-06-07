import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";

import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Logo from './components/Logo';
import Menu from './components/UserMenu';

export const Header = styled.div`
    display: flex;
`;

import './app.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header>
                    <Menu />
                    <Logo width={40} height={40} source="https://source.unsplash.com/random/200x200" />
                </Header>
                <Switch>
                    <Route exact path="/" render={() => (<Dashboard title='Dashboard' />)}  />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default App;
