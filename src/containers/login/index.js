import React from 'react';
import Logo from '../../components/logo';
import LoginForm from '../../components/loginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import { Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Login = ({ status, toastHeader, toastBody, login }) => {

    const history = useHistory();

    const routeToRegister = () => {
        history.push('/register');
    }

    const routeToReset = () => {
        history.push('/reset');
    }

    const errMsg = status === 'error' && (
        <Message
            negative
            header={toastHeader}
            content={toastBody} />
    );

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Entre com sua conta</h2>
            </div>
            <div className="frm">
                {errMsg}
                <LoginForm routeToReset={routeToReset} routeToRegister={routeToRegister} status={status} login={login}></LoginForm>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        status: state.login.status,
        toastHeader: state.login.toastHeader,
        toastBody: state.login.toastContent
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: login(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);