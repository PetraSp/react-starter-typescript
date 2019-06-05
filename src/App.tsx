import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Menu from './components/UserMenu';

import './app.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" render={() => (<Dashboard title='Dashboard' />)}  />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default App;
