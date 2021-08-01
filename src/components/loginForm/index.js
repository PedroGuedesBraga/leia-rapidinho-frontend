import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';


const Login = ({ login, status, routeToRegister, routeToReset }) => {

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

    const handleForgotPassword = (e) => {
        e.preventDefault();
        routeToReset();
    }

    return (
        <div>
            <h2>Entrar</h2>
            <Form loading={status === 'ongoing'} onSubmit={handleSubmit} size="large">
                <Form.Field>
                    <label>Email *</label>
                    <input value={user.email} onChange={(e) => handleInputChange(e, 'email')} icon="at" required={true} type="email" placeholder='Digite seu email' ></input>
                </Form.Field>
                <Form.Field>
                    <label>Senha * <a onClick={handleForgotPassword} className="forgot-password">Esqueci minha senha</a></label>
                    <input value={user.password} onChange={(e) => handleInputChange(e, 'password')} minLength="8" maxLength="32" required={true} label="Senha" type="password" placeholder='Digite sua senha' ></input>
                </Form.Field>
                <div>
                    <Button.Group floated="left">
                        <Button loading={status === 'ongoing'} className="ui button" color="green" size="large" type="submit">Entrar</Button>
                    </Button.Group>
                    <Button.Group floated="right">
                        <Button onClick={routeToRegister} className="ui button" size="large" type="submit">Criar uma conta</Button>
                    </Button.Group>
                </div>
            </Form>
        </div >
    )
}

export default Login;