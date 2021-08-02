import { Fragment, useState } from 'react'
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const ResetForm = ({
    sendToken,
    resetPassword,
    status,
    routeToLogin
}) => {

    const [tokenSent, setTokenSent] = useState(false);
    const [email, setEmail] = useState('');
    const [data, setData] = useState({ token: '', password: '', passwordConfirmation: '' });

    const handleTokenSend = async () => {
        try {
            console.log('Enviando token')
            await sendToken(email);
            setTokenSent(true);
        } catch (err) {
            console.log("Erro ao tentar enviar token", err);
            throw err;
        }
    }

    const handleDataChange = (e, field) => {
        console.log(e.target.value);
        const state = { ...data };
        state[field] = e.target.value
        setData(state);
    }

    const handleTokenVerify = async () => {
        try {
            console.log('Verificando token')
            await resetPassword(email, data.password, data.token);
            routeToLogin();
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    const handleBackToLogin = () => {
        routeToLogin();
    }

    const RouteToLoginButton = ({ disabled }) => {
        return <Button size='large' onClick={handleBackToLogin}>Ir para login</Button>
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordsNotMatching = data.password !== data.passwordConfirmation;
    return (
        <Fragment>
            <h2>Redefinir senha</h2>
            <Form loading={status === 'ongoing'} onSubmit={() => !tokenSent ? handleTokenSend() : handleTokenVerify()} size="large">
                {
                    !tokenSent &&
                    <Fragment>
                        <Form.Field>
                            <label>Enviaremos um e-mail com um código para o endereço digitado abaixo:</label>
                            <input value={email} onChange={handleEmailChange} icon="at" required={true} type="email" placeholder='Digite seu email'></input>
                        </Form.Field>
                        <Button.Group floated="left">
                            <Button className="ui button" color="green" size="large" type="submit">Enviar código</Button>
                        </Button.Group>
                        <Button.Group floated="right">
                            <RouteToLoginButton />
                        </Button.Group>
                    </Fragment>
                }
                {
                    tokenSent &&
                    <Fragment>
                        <Form.Field>
                            <label>Digite o código recebido:</label>
                            <input onChange={(e) => handleDataChange(e, 'token')} type="text" maxLength={6} placeholder='Digite o token'></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Digite a nova senha:</label>
                            <input onChange={(e) => handleDataChange(e, 'password')} pattern="([0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*" title="Verifique se a senha segue o padrão estabelecido" minLength="8" maxLength="32" required type="password" placeholder='Deve conter entre 8 e 32 dígitos, sendo letras e números'></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Confirme a nova senha {passwordsNotMatching && <span>- *A senha e a confirmação de senha estão diferentes*</span>}</label>
                            <input onChange={(e) => handleDataChange(e, 'passwordConfirmation')} pattern="([0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*" title="Verifique se a senha segue o padrão estabelecido" minLength="8" maxLength="32" required type="password" placeholder='Deve conter entre 8 e 32 dígitos, sendo letras e números'></input>
                        </Form.Field>
                        <Button.Group floated="left">
                            <Button disabled={passwordsNotMatching} className="ui button" color="green" size="large" type="submit">Redefinir senha</Button>
                        </Button.Group>
                        <Button.Group floated="right">
                            <RouteToLoginButton />
                        </Button.Group>
                    </Fragment>
                }
            </Form>
        </Fragment>
    )
}



export default ResetForm;