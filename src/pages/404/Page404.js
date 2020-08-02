import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

import page404 from '../../assets/page404.gif';


function Page404(){
    return (
        <PageDefault>
            <Link to="/">
                <image404>
                    <img className="Page404" src={ page404 } width="500" height="auto" alt='Gif página 404'
                         style={{position:'absolute', left: '400px', top: '90px'}}/>
                </image404>
            </Link>
        </PageDefault>
    );
}

export default Page404;