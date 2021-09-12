import React, { useState } from 'react';
import './styles.css';
import Logo from '../../components/logo';
import RegisterForm from '../../components/registerForm';
import { Message } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { createAccount } from '../../api/user';

const Register = () => {
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState({ title: null, description: null });

    const [registerStatus, setRegisterStatus] = useState('NOT_SUBMITTED');

    const [clicked, setClicked] = useState(0)

    const register = async (user) => {
        try {
            setRegisterStatus('SUBMITTED');
            await createAccount(user);
            setRegisterStatus('SUCCESS');
        } catch (err) {
            if (err.emailAlreadyExists) {
                setErrorMessage({ title: 'Ocorreu um erro', description: 'Email informado já está em uso.' })
            } else {
                setErrorMessage({ title: 'Ocorreu um erro', description: 'Espere alguns minutos e tente novamente mais tarde' });
            }
            setRegisterStatus('ERROR');
        }
    }

    const successToast = registerStatus === 'SUCCESS' && <Message
        success
        header={'Sucesso!'}
        content={'Verifique seu e-mail para concluir o cadastro. Enviamos um e-mail de confirmação'}
    />;
    const errorToast = registerStatus === 'ERROR' && <Message
        negative
        header={errorMessage.title}
        content={errorMessage.description}
    />;

    const routeToLogin = (e) => {
        e.preventDefault();
        setClicked(clicked + 1);
        console.log(clicked);
        history.push('/login');
    }

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Crie sua conta</h2>
            </div>
            <div className="frm">
                <Logo inverted mobile></Logo>
                {successToast}
                {errorToast}
                <RegisterForm routeToLogin={routeToLogin} loading={registerStatus === 'SUBMITTED'} register={register}></RegisterForm>
            </div>
        </div>
    )
}


export default Register;