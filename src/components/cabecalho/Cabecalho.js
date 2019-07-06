import React from 'react';
import "./Cabecalho.css";
import "../../index.css";
import avatar from '../../assets/avatar.png';


class Cabecalho extends React.Component {

    render() { 
        return (
            <nav className="nav-styles"> 
                <div className="nav-content">
                    <p><b>Breeds</b></p>
                    <div className="avatar-box">
                        <img src={avatar} alt={avatar} className="img-avatar" />
                        <i className="fas fa-chevron-down deselected"></i>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Cabecalho;