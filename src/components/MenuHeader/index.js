import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Route } from 'react-router-dom'
import Game from '../../containers/game'

const MenuHeader = () => {
    return (
        <Menu widths={3}>
            <Menu.Item name={'Jogo'} icon={'gamepad'} active></Menu.Item>
            <Menu.Item name={'Perfil'} icon={'user circle'}></Menu.Item>
            <Menu.Item name={'Sair'} icon={'sign-out'}></Menu.Item>
        </Menu>
    )
}

export default MenuHeader;