import React from 'react';
import "./MenuApp.css";


class MenuApp extends React.Component {
    // constructor(props) {
    //     super(props);

        // this.state = { input: "" };
    // }


    render() { 
        return (
            <div className="menuStyles" >
                <div className="menu-title">
                        <h1>HostGatos</h1>
                        <i className="fas fa-chevron-left"></i>
                </div>
                <div className="menu-options">
                    <div className="menu-item selected">
                        <i className="fas fa-paw"> </i>
                        <span>Breeds</span>
                    </div>
                    <div className="menu-item">
                        <i className="far fa-comment-alt"></i>
                        <span>Feedback</span>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default MenuApp;