import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Game from './game';
import { connect } from 'react-redux';
import { getWords, play } from '../../actions/gameActions';


const LoggedInArea = ({ gameStatus, currentWord, getWords, play, currentCount, totalWords }) => {


    const location = useLocation();
    const history = useHistory();
    const routeToGame = () => {
        history.push('/game');
    }
    const routeToProfile = () => {
        history.push('/profile');
    }



    return (
        <>
            <div>
                <Menu borderless widths={3}>
                    <Menu.Item onClick={routeToGame} active={location.pathname === '/game'} name={'Jogo'} icon={'gamepad'}></Menu.Item>
                    <Menu.Item onClick={routeToProfile} active={location.pathname === '/profile'} name={'Perfil'} icon={'user circle'}></Menu.Item>
                    <Menu.Item name={'Sair'} icon={'sign-out'}></Menu.Item>
                </Menu>
            </div>
            <Switch>
                <Route path="/game">
                    <Game
                        getWords={getWords}
                        play={play}
                        gameStatus={gameStatus}
                        word={currentWord}
                        currentCount={currentCount}
                        totalWords={totalWords}
                    />
                </Route>
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        gameStatus: state.game.status,
        currentWord: state.game.currentWord,
        currentCount: state.game.currentCount,
        totalWords: state.game.totalWords
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWords: getWords(dispatch),
        play: play(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInArea);