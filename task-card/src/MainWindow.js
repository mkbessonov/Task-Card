import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class MainWindow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         login: "",
    //         password: ""
    //     };
    //     this.handleInputChange = this.handleInputChange.bind(this);
    // }


    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    //     //console.log();
    // }
    //
    // clickFirstButton() {
    //     console.log(this.state.login, this.state.password);
    //     this.browserHistory.push('/sample');
    // }
    //
    renderTask(i, task) {
       return (
            <div>
                <a href="#" className="card-link">{i + ". " +  task}</a>
            </div>
        );
    }

    renderInformation(key, value){
        return(
            <p className="card-text">{key}: {value}</p>
        );
    }

    renderUser(){
        let user = {
            name: "Бессонов",
            jobPosition: "Инженер",
            phoneNumber: "123-45-67",
            mailAddress: "besson@mail.ru"
        };

        return(
            <div className="col-sm-6">
                <div className="card" style={{width: "20rem", height: "40rem"}}>
                    <img src={require('./UserIcon.png')} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        {Object.entries(user).map(([key1, value1]) => this.renderInformation(key1, value1))}
                    </div>
                </div>
            </div>
        );
    }


    render() {
        let elems = [1, 2, 3, 4, 5];
        return (
            <div className="row">
                {this.renderUser()}
                <div className="col-sm-6">
                    <div className="card" style={{width: "20rem", height: "40rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Список задач</h5>
                            {elems.map(elem => this.renderTask(elem, "Задача"))}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default MainWindow;
