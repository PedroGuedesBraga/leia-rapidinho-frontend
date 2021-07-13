import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import { Button, Form, Input } from 'semantic-ui-react';

const Register = () => {

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Já tem uma conta? Clique aqui</h2>
            </div>
            <div className="frm">
                <h2>Crie sua conta</h2>
                <Form size="large">
                    <Form.Input required label='Nome' placeholder='Digite seu nome' width={9} />
                    <Form.Input required label='Sobrenome' placeholder='Digite seu sobrenome' width={9} />
                    <Form.Input icon="at" required label='Email' type="email" placeholder='Digite seu email' width={9} />
                    <Form.Input required label='Senha' type="password" placeholder='Deve conter entre 8 e 32 dígitos, sendo letras e números' width={9} />
                    <Form.Input required label='Confirmação de senha' type="password" placeholder='Confirme sua senha' width={9} />
                    <Button className="ui button" color="green" size="large" type="submit">Criar conta</Button>
                </Form>
            </div>
        </div>
    )
}

export default Register;