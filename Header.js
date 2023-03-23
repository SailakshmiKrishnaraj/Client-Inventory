import React from 'react';
import Title from '../../assets/images/Title.png';
import LogoutButton from './LogoutButton';

const Header = () => {
    return (
        <div className='table-header container-fluid'>
            <div className='row p-0'>
                <div className='col-7'>
                    <span ><img src={Title} className='table-logo' alt='#' /></span>
                </div>
                <div className='col-auto text-end align-self-end routerStyle margin_bottom' ><div className='header-logoutText'> <LogoutButton /></div> </div>
            </div>
        </div>
    );
}


export default Header;
