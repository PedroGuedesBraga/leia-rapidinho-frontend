import React, { useEffect, useState } from 'react';
import Logo from '../../components/logo';
import LoginForm from '../../components/loginForm';
import { connect } from 'react-redux';
import { authenticate } from '../../api/user.js';
import { Message } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom';
import { verifyEmail } from '../../api/user'

const Login = ({ toastResetStatus, toastResetHeader, toastResetBody }) => {

    const history = useHistory();
    const location = useLocation();

    const [verificationStatus, setVerificationStatus] = useState(null);
    const [formLoading, setFormLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false)

    useEffect(() => {
        const verify = async () => {
            const params = new URLSearchParams(location.search);
            const token = params.get('token');
            const email = params.get('email');
            if (token && email) {
                setFormLoading(true)
                setVerificationStatus('VERIFYING');
                try {
                    await verifyEmail(email, token);
                    setVerificationStatus('SUCCESS')
                } catch (err) {
                    setVerificationStatus('ERROR')
                }
                setFormLoading(false);
            }
        }
        verify();
    }, []);

    const login = async (user) => {
        try {
            console.log('logando 2')
            setFormLoading(true);
            await authenticate(user);
        } catch (error) {
            setErrorLogin(true);
        }
        setFormLoading(false);
    }



    const routeToRegister = () => {
        history.push('/register');
    }

    const routeToReset = () => {
        history.push('/reset');
    }

    const errMsg = errorLogin && (
        <Message
            negative
            header={'Houve um erro'}
            content={'Verifique as credenciais e tente novamente.'} />
    );

    const successTokenResetMessage = toastResetStatus === 'verifySuccess' && <Message
        success
        header={toastResetHeader}
        content={toastResetBody}
    />;

    const successVerifyEmailMessage = verificationStatus === 'SUCCESS' && <Message
        success
        header={'Sucesso!'}
        content={'Email verificado com sucesso.'}
    />;

    const errorVerifyEmailMessage = verificationStatus === 'ERROR' && <Message
        negativo
        header={'Ocorreu um erro na verificação do e-mail.'}
        content={'Espere um pouco e tente novamente.'}
    />;

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Entre com sua conta</h2>
            </div>
            <div className="frm">
                {errMsg}
                {successTokenResetMessage}
                {successVerifyEmailMessage}
                {errorVerifyEmailMessage}
                <LoginForm loading={formLoading} routeToReset={routeToReset} routeToRegister={routeToRegister} login={login}></LoginForm>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        toastResetStatus: state.reset.status,
        toastResetHeader: state.reset.toastHeader,
        toastResetBody: state.reset.toastMessage
    };
}


export default connect(mapStateToProps)(Login);