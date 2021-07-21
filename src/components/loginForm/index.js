import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';


const Login = ({ login, status }) => {

    const INITIAL_STATE = {
        email: "",
        password: ""
    };

    const history = useHistory();

    const [user, setUser] = useState(INITIAL_STATE);

    const handleInputChange = (e, field) => {
        const state = { ...user };
        state[field] = e.target.value;
        setUser(state);
        console.log(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user, history);
        setUser(INITIAL_STATE);
    }

    return (
        <div>
            <h2>Entrar</h2>
            <Form loading={status === 'ongoing'} onSubmit={handleSubmit} size="large">
                <Form.Input value={user.email} onChange={(e) => handleInputChange(e, 'email')} icon="at" required label='Email' type="email" placeholder='Digite seu email' />
                <Form.Input value={user.password} onChange={(e) => handleInputChange(e, 'password')} pattern="([0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*" title="Verifique se a senha segue o padrão estabelecido" minLength="8" maxLength="32" required label="Senha" type="password" placeholder='Digite sua senha' />
                <div>
                    <Button.Group floated="left">
                        <Button loading={status === 'ongoing'} className="ui button" color="green" size="large" type="submit">Entrar</Button>
                    </Button.Group>
                    <Button.Group floated="right">
                        <Link to="/register">
                            <Button className="ui button" size="large" type="submit">Criar uma conta</Button>
                        </Link>
                    </Button.Group>
                </div>
            </Form>
        </div>
    )
}

export default Login;