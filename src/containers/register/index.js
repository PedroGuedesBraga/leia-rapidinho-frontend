import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import RegisterForm from '../../components/registerForm';

const Register = () => {

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Já tem uma conta? Clique aqui</h2>
            </div>
            <div className="frm">
                <RegisterForm></RegisterForm>
            </div>
        </div>
    )
}

export default Register;