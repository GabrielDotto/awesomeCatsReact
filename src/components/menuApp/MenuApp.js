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
                </div>
                <div className="menu-options">
                    <div>
                        <i class="fas fa-paw"> <p>Breeds</p></i>
                        
                    </div>
                    <div></div>
                </div>
                
            </div>
        );
    }
}


export default MenuApp;