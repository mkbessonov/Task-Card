import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class LeftPanel extends React.Component {

    renderInformation(key, value) {
        let russianName = '';
        switch (key) {
            case 'name':
                russianName = 'Пользователь';
                break;
            case 'jobPosition':
                russianName = 'Должность';
                break;
            case 'phoneNumber':
                russianName = 'Телефон';
                break;
            case 'mailAddress':
                russianName = 'Почта';
                break;
        }
        return (
            <p className="card-text">{russianName}: {value}</p>
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
            <div>
                <div className="card  d-flex align-items-center">
                    <div className="vtb-user-photo">
                        <img src={require('./UserIcon.png')} className="card-img-top" alt="..."></img></div>
                    <div className="card-body">
                        {Object.entries(user).map(([key, value]) => this.renderInformation(key, value))}
                    </div>
                </div>
            </div>
        );
    }
}


export default LeftPanel;