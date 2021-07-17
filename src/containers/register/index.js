import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import RegisterForm from '../../components/registerForm';
import { connect } from 'react-redux';
import { success, error, register } from '../../actions/registerActions';
import { Message } from 'semantic-ui-react';

const Register = (props) => {
    const handleSubmit = (data) => {
        console.log('Registrando 1o com: ', data)
        props.register(data)
    }
    console.log('Propss' + JSON.stringify(props))
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
    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Já tem uma conta? Clique aqui e faça login</h2>
            </div>
            <div className="frm">
                {successMessage}
                {errorMessage}
                <RegisterForm registerStatus={props.status} register={handleSubmit} success={props.success}></RegisterForm>
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