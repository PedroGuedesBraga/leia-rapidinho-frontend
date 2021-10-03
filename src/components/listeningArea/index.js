import React, { useState, useEffect } from 'react';
import Word from '../word';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import Confetti from 'react-confetti';
import { Rating } from 'semantic-ui-react';

const ListeningArea = ({ word, play, currentCount, totalWords, totalTime, onTimeComplete }) => {
    const [error, setError] = useState(false);
    const [confetti, setConfetti] = useState(false)


    useSpeechRecognition({
        commands:
            [
                {
                    command: word,
                    callback: () => {
                        setError(false);
                        setConfetti(true);
                        setTimeout(() => {
                            setConfetti(false);
                        }, 2000);
                        play(word)

                    }
                },
                {
                    command: '*',
                    callback: (speaked) => {
                        console.log("falou " + JSON.stringify(speaked));
                        if (speaked.toLowerCase() !== word.toLowerCase() && speaked !== "") {
                            setError(true);
                            setTimeout(() => {
                                setError(false);
                            }, 500)
                        }
                    }
                }
            ]
    });

    useEffect(() => {
        SpeechRecognition.startListening({ language: 'pt-BR' });
    });



    return (
        <>
            <Word error={error} word={word} />
            <CountdownCircleTimer isPlaying
                size={100}
                duration={totalTime}
                colors={[
                    ["#F7B801", 0.33], ["#F7B801", 0.33], ["#EC5800", 0.33]
                ]}
                strokeWidth={3}
                strokeLinecap={'square'}
                onComplete={() => { onTimeComplete(); return [false, 0] }}
            >
                {({ remainingTime }) => { return <h3>{remainingTime}s</h3> }}
            </CountdownCircleTimer>
            {confetti && <Confetti gravity={0.5} />}
            <div style={{ width: "200px;" }}>
                <Rating icon='star' rating={currentCount} maxRating={totalWords} disabled size={'massive'} />
            </div>
        </>
    )
}

export default ListeningArea;