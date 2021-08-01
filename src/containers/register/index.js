import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import RegisterForm from '../../components/registerForm';
import { connect } from 'react-redux';
import { register } from '../../actions/registerActions';
import { Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Register = (props) => {
    const history = useHistory();

    const handleSubmit = (data) => {
        props.register(data)
    }

    const successMessage = props.status === 'success' && <Message
        success
        header={props.toastHeader}
        content={props.toastContent}
    />;
    const errorMessage = props.status === 'error' && <Message
        negative
        header={props.toastHeader}
        content={props.toastContent}
    />;

    const routeToLogin = () => {
        history.push('/login');
    }

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Crie sua conta</h2>
            </div>
            <div className="frm">
                {successMessage}
                {errorMessage}
                <RegisterForm routeToLogin={routeToLogin} registerStatus={props.status} register={handleSubmit} success={props.success}></RegisterForm>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: register(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        toastContent: state.register.toastContent,
        toastHeader: state.register.toastHeader,
        status: state.register.status
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);