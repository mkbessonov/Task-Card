import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
import history from './history'
require('./login.css');

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    clickFirstButton() {
        console.log(this.state.login, this.state.password);
        if (this.state.login === '1' && this.state.password === '1') {
            history.push('#/main');
            history.go();
        } else {
            alert("Неверный логин/пароль")
        }
    }


    render() {
        return (
            <div className="container d-flex align-items-center justify-content-center">
                <div className="vtb-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center"><img src={require('./vtb2018.png')}
                                                                                width="100" height="100"/></div>
                            <div className="form-group">
                                <label htmlFor="exampleInputLogin">Логин</label>
                                <input className="form-control" id="exampleInputLogin" aria-describedby="emailHelp"
                                       placeholder="Введите логин" width="100" value={this.state.login}
                                       onChange={this.handleInputChange} name="login"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword">Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword"
                                       placeholder="Введите пароль" value={this.state.password}
                                       onChange={this.handleInputChange} name="password"></input>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary"
                                        onClick={() => this.clickFirstButton()}>Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;
