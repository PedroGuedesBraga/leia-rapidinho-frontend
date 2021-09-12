import React from 'react';
import './styles.css';
import { Icon } from 'semantic-ui-react';

const Logo = ({ inverted, mobile }) => {
    return (
        <div className={mobile ? 'logo-mobile' : ''} >
            <span className={`logo ${inverted ? 'logo-inverted' : ''} `}>Leia Rapidinho </span>
            <Icon name="book" size="huge" inverted={!inverted}></Icon>
        </div>

    )
}


export default Logo;