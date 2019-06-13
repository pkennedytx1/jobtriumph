import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <Link className="navbar-brand" to="/home">
                    <img src="" width="30" height="30" className="d-inline-block align-top" alt="" />
                    <b>Stream</b>Line
                </Link>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/newjob">Log a Job</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!">Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;