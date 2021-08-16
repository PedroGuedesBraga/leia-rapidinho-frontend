import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Logo from '../../../components/logo';
import './styles.css';
import { Button, Icon, Loader, Rating } from 'semantic-ui-react';
import ListeningArea from '../../../components/listeningArea';


const Game = ({ gameStatus, word, getWords, play, currentCount, totalWords }) => {
    return (
        <div style={{ backgroundColor: '#270722' }}>
            <div className='game-menu-container'>
                {
                    gameStatus === 'SEM_JOGO'
                    &&
                    <>
                        <Logo />
                        <Button onClick={getWords} basic color='orange' fluid size='big'>
                            <Icon name='gamepad'></Icon>
                            Nova rodada
                    </Button>
                        <Button basic color='blue' fluid size='big'>
                            <Icon name='info'></Icon>
                        Como jogar
                    </Button>
                    </>
                }
                {
                    gameStatus === 'BUSCANDO_PALAVRAS'
                    &&
                    <>
                        <Loader inverted active={true} size={'big'}>Preparando palavras</Loader>
                    </>
                }
                {
                    gameStatus === 'PREPARANDO'
                    &&
                    <>
                        <CountdownCircleTimer isPlaying
                            onComplete={play}
                            size={130}
                            duration={3}
                            colors={[
                                ['#004777', 0.33],
                                ['#F7B801', 0.33],
                                ['#F7B801', 0.33]
                            ]}
                        >
                            {({ remainingTime }) => <h1>{remainingTime}</h1>}
                        </CountdownCircleTimer>
                    </>
                }
                {
                    gameStatus === 'JOGANDO'
                    &&
                    <ListeningArea word={word} play={play} currentCount={currentCount} totalWords={totalWords} />
                }
                {
                    gameStatus === 'FINALIZADO'
                    &&
                    <div className='end-game-container'>
                        <h1 className='end-game-title'>Fim de jogo</h1>
                        <Rating icon='star' rating={currentCount - 1} maxRating={totalWords} disabled size={'massive'} />
                    </div>

                }
            </div>
        </div>
    )
}

export default Game;