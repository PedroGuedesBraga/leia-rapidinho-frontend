import React, { useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Logo from '../../../components/logo';
import './styles.css';
import { Button, Icon, Loader, Rating } from 'semantic-ui-react';
import ListeningArea from '../../../components/listeningArea';


const Game = ({ level, wordsRead, endGame, saveGame, totalTime, gameStatus, word, getWords, play, currentCount, totalWords, startNewGame }) => {
    useEffect(() => {
        if (gameStatus === 'SALVANDO') {
            saveGame(level, currentCount, wordsRead);
        }
    })

    return (
        <div className='game-menu-container'>
            {
                gameStatus === 'SEM_JOGO'
                &&
                <>
                    <Logo />
                    <Button onClick={getWords} color='orange' fluid size='big'>
                        <Icon name='gamepad'></Icon>
                            Nova rodada
                        </Button>
                    <Button color='blue' fluid size='big'>
                        <Icon name='question circle'></Icon>
                            Como jogar (para responsáveis)
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
                    <CountdownCircleTimer
                        isPlaying
                        onComplete={() => play(undefined)}
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
                <ListeningArea onTimeComplete={endGame} totalTime={totalTime} word={word} play={play} currentCount={currentCount} totalWords={totalWords} />
            }
            {
                gameStatus === 'SALVANDO'
                &&
                <>
                    <Loader inverted active={true} size={'big'}>Salvando jogo</Loader>
                </>
            }
            {
                gameStatus === 'FINALIZADO'
                &&
                <div className='end-game-container'>
                    <Rating icon='star' rating={currentCount} maxRating={totalWords} disabled size={'massive'} />
                    <h1 className='end-game-title'>Fim de jogo</h1>
                    <Button onClick={startNewGame} inverted color='olive'>
                        <Icon name="reply"></Icon>
                            Voltar ao início
                        </Button>
                </div>
            }
        </div>
    )
}

export default Game;