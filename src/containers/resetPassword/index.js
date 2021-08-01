import React from 'react';
import './styles.css';
import Logo from '../../components/logo';
import ResetForm from '../../components/resetForm'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendToken, resetPassword } from '../../actions/resetActions';
import { Message } from 'semantic-ui-react';

const ResetPassword = ({ sendToken, resetPassword, status, toastHeader, toastBody }) => {

    const history = useHistory();

    const routeToLogin = () => {
        history.push('/login')
    }

    const successSendMessage = status === 'sendSuccess' && <Message
        success
        header={toastHeader}
        content={toastBody}
    />;

    const errorSendMessage = status === 'sendError' && <Message
        negative
        header={toastHeader}
        content={toastBody}
    />;
    const errorVerifyMessage = status === 'verifyError' && <Message
        negative
        header={toastHeader}
        content={toastBody}
    />;

    return (
        <div className="container">
            <div className="msg">
                <Logo></Logo>
                <h2 className="logo-subtitle">Redefina sua senha</h2>
            </div>
            <div className="frm">
                {successSendMessage}
                {errorSendMessage}
                {errorVerifyMessage}
                <ResetForm
                    routeToLogin={routeToLogin}
                    sendToken={sendToken}
                    resetPassword={resetPassword}
                    status={status}
                    toastHeader={toastHeader}
                    toastBody={toastBody}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendToken: sendToken(dispatch),
        resetPassword: resetPassword(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.reset.status,
        toastHeader: state.reset.toastHeader,
        toastBody: state.reset.toastMessage
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);