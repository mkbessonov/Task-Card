import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class LeftPanel extends React.Component {

    renderInformation(key, value) {
        return (
            <p className="card-text">{key}: {value}</p>
        );
    }

    render() {
        let user = {
            name: "Бессонов",
            jobPosition: "Инженер",
            phoneNumber: "123-45-67",
            mailAddress: "besson@mail.ru"
        };

        return (
            <div className="col-sm-6">
                <div className="card" style={{width: "20rem", height: "40rem"}}>
                    <img src={require('./UserIcon.png')} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        {Object.entries(user).map(([key, value]) => this.renderInformation(key, value))}
                    </div>
                </div>
            </div>
        );
    }
}


export default LeftPanel;