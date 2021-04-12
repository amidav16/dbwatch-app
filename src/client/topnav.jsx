import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBIcon} from 'mdbreact';
import Bell from "./components/common/bell";
import SearchBar from "./components/common/searchbar";

//Navigationbar with a searchbar, could change this to a login/logout component for admin
class TopNav extends Component {

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/"/>
              
                <SearchBar/>

                    <MDBNavbarNav left>
                        <MDBNavItem active>

                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://www.dbwatch.com/about-us" target="_blank">About dbWatch</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://www.dbwatch.com/" target="_blank">User settings</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://www.dbwatch.com/" target="_blank">Logout </a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Bell></Bell>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                    
                        <MDBNavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/" target="_blank"><MDBIcon fab icon="github" className="mr-2"/>dbWatch github</a>
                        </MDBNavItem>
                    </MDBNavbarNav>
            </MDBNavbar>
        );
    }
}

export default TopNav;