import React from 'react';
import MenuHeader from '../../components/MenuHeader';
import Logo from '../../components/logo';
import './styles.css';
import { Button, Icon } from 'semantic-ui-react';

const Game = () => {
    return (
        <div style={{ backgroundColor: '#270722' }}>
            <MenuHeader></MenuHeader>
            <div className='game-menu-container'>
                <Logo />
                <Button basic color='orange' fluid size='big'>
                    <Icon name='gamepad'></Icon>
                    Nova rodada
                </Button>
                <Button basic color='blue' fluid size='big'>
                    <Icon name='info'></Icon>
                    Como jogar
                </Button>
            </div>
        </div>
    )
}

export default Game;