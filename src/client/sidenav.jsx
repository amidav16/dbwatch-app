import React from 'react';
import logo from "../assets/logo.svg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

//Side navigation bar, only Dashboard and Logs works for now
//Show email at the bottom later
const SideNav = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <NavLink to="/" className="logo-wrapper waves-effect">
                <img alt="DBwatch Logo" className="img-fluid" src={logo}/>
            </NavLink>
            <div className="gray-line"></div>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/logs">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Logs
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/overview">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Overview
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/errors" >
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Errors
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
            

        </div>
    );
}

export default SideNav;