import React from 'react';
import './styles.css'
import TextTransition, { presets } from 'react-text-transition';

const Word = ({ word, error }) => {

    return (
        <h1 className={`word ${error ? 'error' : ''}`}>
            <TextTransition
                noOverflow={true}
                inline={true}
                text={word}
                springConfig={presets.wobbly}
                delay={300}
                direction={'down'} />
        </h1>
    )
}

export default Word;