import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import { Button } from 'semantic-ui-react';

const Register = () => {

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
            </div>
            <div className="form">
                <div className="form-header">Crie sua conta</div>
                <div className="form-body">
                    <Button>Clique aqui</Button>
                </div>
            </div>
        </div>
    )
}

export default Register;