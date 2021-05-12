import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import git from './img/git.jpg'
import {Loader} from './loader';
export {Index as default} from './index';

export const Index = () => {


    return(
        <div>
    
            <div className="mx-auto text-center col-md-8 p-4">
                <Link to="/search" title="Serach">
                    <img id="img-git" src={git} alt='img'/>
                </Link>
            </div>
            <div className="col-md-5 text-center mx-auto p-3">
                <h2>Start your search on github!</h2>
            </div>
        </div>
    )

}



