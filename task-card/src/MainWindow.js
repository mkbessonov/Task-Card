import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftPanel from "./leftPanel";
import RightPanel from "./rightContainer";

class MainWindow extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar" style={{backgroundColor: '#0a2896'}}>
                    <a className="navbar-brand" href="#">ВТБ</a>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <LeftPanel/>
                        <RightPanel/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainWindow;
