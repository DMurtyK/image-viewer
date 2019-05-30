import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

constructor(){
    super();
   // loggedIn: sessionStorage.getItem("access-token") == null ? false : true
}




    render() {
        return (
            <header className='app-header'>
                <div className='app-logo'>
                    Image Viewer
            </div>
            </header>
        )
    }
}

export default Header;