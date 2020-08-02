import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    scroll-padding-left: 5%;
    scroll-padding-right: 5%;
`; 

function PageDefault({ children }){
    return (
        <>
            <Menu />  
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;