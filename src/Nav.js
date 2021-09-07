import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav Class="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

            
                <div Class="container-fluid">
                    <div className="Title">
                    <a Class="navbar-brand"  href="#">Welcome to my Portfolio!</a>
                    </div>

                    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                <div Class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul Class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li Class="nav-item">
                <a Class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li Class="nav-item">
                <a Class="nav-link" href="#">About me</a>
              </li>

              <li Class="nav-item">
                <a Class="nav-link" href="#">Resume</a>
              </li>

              <li Class="nav-item">
                <a Class="nav-link" href="#">Projects</a>
              </li>

              <li Class="nav-item">
                <a Class="nav-link" href="#">Contacts</a>
              </li>
              
            </ul>

                    </div>
                </div>
            </div>
      </nav>
        
    )
}

export default Nav
