import React from 'react';
import './styles.css';
import { Icon } from 'semantic-ui-react';

const Logo = () => {
    return (
        <div>
            <span className="logo">Leia Rapidinho </span>
            <Icon name="book" size="huge" inverted></Icon>
        </div>

    )
}


export default Logo;