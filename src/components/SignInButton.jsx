import React from 'react';
import { NavLink } from 'react-router-dom';

function SignInButton() {
    return (
        <ul>
            <li className='absolute right-20 top-5 font-semibold hover:cursor-pointer hover:text-[#8F00FF] transition'>
                <NavLink to='/shopping-cart/signin'>Sign In</NavLink>
            </li>
        </ul>
    )
}

export default SignInButton