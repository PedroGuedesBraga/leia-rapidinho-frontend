import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Game from './game';
import { connect } from 'react-redux';
import { getWords, play, startNewGame, endGame, saveGame } from '../../actions/gameActions';
import Profile from '../LoggedInArea/profile'


const LoggedInArea = ({ dispatch, wordsRead, level, saveGame, endGame, totalTime, gameStatus, currentWord, getWords, play, currentCount, totalWords, startNewGame }) => {


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
                        startNewGame={startNewGame}
                        totalTime={totalTime}
                        endGame={endGame}
                        saveGame={saveGame}
                        level={level}
                        wordsRead={wordsRead}
                        dispatch={dispatch}
                    />
                </Route>
                <Route path="/profile">
                    <Profile></Profile>
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
        totalWords: state.game.totalWords,
        totalTime: state.game.totalTime,
        level: state.game.level,
        wordsRead: state.game.wordsRead
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWords: getWords(dispatch),
        play: play(dispatch),
        startNewGame: startNewGame(dispatch),
        endGame: endGame(dispatch),
        saveGame: saveGame(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInArea);