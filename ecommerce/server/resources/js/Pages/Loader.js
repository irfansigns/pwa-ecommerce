import React,{useState , useRef} from 'react';
import {Inertia} from '@inertiajs/inertia';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const Loader = (props) =>{
 
    return(
        <FontAwesomeIcon icon={faSync} spin size="5x" />
    )
}

export default Loader;