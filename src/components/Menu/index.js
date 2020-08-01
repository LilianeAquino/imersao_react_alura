import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';
import Button from  '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={ Logo } alt='Logo da página'/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu; 