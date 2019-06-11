import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-light bg-light">
                <Link class="navbar-brand" to="/home">
                    <img src="" width="30" height="30" class="d-inline-block align-top" alt="" />
                    <b>Stream</b>Line
                </Link>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/newjob">Log a Job</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="profile">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;