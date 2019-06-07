import React from 'react';

export interface LoginProps {
    username: string;
    password: string;
}

class Login extends React.Component<LoginProps>{
    render(){
        const { username, password } = this.props;
        return <h1>Inside Login</h1>
    }
}

export default Login;
