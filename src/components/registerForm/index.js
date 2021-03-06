import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const RegisterForm = ({ loading, register, routeToLogin }) => {
    const INITIAL_STATE = {
        userName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const [user, setUser] = useState(INITIAL_STATE);

    const handleInputChange = (e, field) => {
        const state = { ...user };
        state[field] = e.target.value;
        setUser(state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        register(user);
        setUser(INITIAL_STATE);
    }

    const msgPasswordsNotMatching = user.password !== user.passwordConfirmation ?
        "(senhas não coincidem)"
        :
        "";

    return (
        <div>

            
            <h2>Crie sua conta</h2>
            <Form loading={loading} onSubmit={handleSubmit} size="large">
                <Form.Input value={user.userName} onChange={(e) => { handleInputChange(e, 'userName') }} required label='Nome' placeholder='Digite seu nome' />
                <Form.Input value={user.lastName} onChange={(e) => { handleInputChange(e, 'lastName') }} required label='Sobrenome' placeholder='Digite seu sobrenome' />
                <Form.Input value={user.email} onChange={(e) => { handleInputChange(e, 'email') }} icon="at" required label='Email' type="email" placeholder='Digite seu email' />
                <Form.Input pattern="([0-9]+[A-Za-z]|[A-Za-z]+[0-9])[A-Za-z0-9]*" title="Verifique se a senha segue o padrão estabelecido" value={user.password} onChange={(e) => { handleInputChange(e, 'password') }} minLength="8" maxLength="32" required label={`Senha ${msgPasswordsNotMatching}`} type="password" placeholder='Deve conter entre 8 e 32 dígitos, sendo letras e números' />
                <Form.Input pattern="([0-9]+[A-Za-z]|[A-Za-z]+[0-9])[A-Za-z0-9]*" title="Verifique se a senha segue o padrão estabelecido" value={user.passwordConfirmation} onChange={(e) => { handleInputChange(e, 'passwordConfirmation') }} minLength="8" maxLength="32" required label={`Confirmação de senha ${msgPasswordsNotMatching}`} type="password" placeholder='Confirme sua senha' />
                <div>
                    <Button.Group floated="left">
                        <Button loading={loading} disabled={loading || user.password !== user.passwordConfirmation} className="ui button" color="green" size="large" type="submit">Criar conta</Button>
                    </Button.Group>

                    <Button.Group floated="right">
                        <Button className="ui button" size="large" onClick={routeToLogin}>Ir para login</Button>
                    </Button.Group>
                </div>
            </Form>
        </div>
    )
}

export default RegisterForm;