import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

const RegisterForm = () => {
    return (
        <div>
            <h2>Crie sua conta</h2>
            <Form size="large">
                <Form.Input required label='Nome' placeholder='Digite seu nome' />
                <Form.Input required label='Sobrenome' placeholder='Digite seu sobrenome' />
                <Form.Input icon="at" required label='Email' type="email" placeholder='Digite seu email' />
                <Form.Input required label='Senha' type="password" placeholder='Deve conter entre 8 e 32 dígitos, sendo letras e números' />
                <Form.Input required label='Confirmação de senha' type="password" placeholder='Confirme sua senha' />
                <Button className="ui button" color="green" size="large" type="submit">Criar conta</Button>
            </Form>
        </div>
    )
}

export default RegisterForm;