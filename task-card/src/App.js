import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';

class FirstList extends React.Component {
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
        //console.log();
    }

    clickFirstButton() {
        console.log(this.state.login, this.state.password);
        this.browserHistory.push('/sample');
    }


    render() {
        return (
            <div className="container">
                <div className="col-6 align-content-center">
                    {/*<form>*/}
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <nav className="navbar navbar-light" style={{backgroundColor: '#ffffff'}}>
                            <img src={require('./vtb2018.png')} width="100" height="100"/>
                        </nav>
                    </nav>


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
                    <button type="submit" className="btn btn-primary"
                            onClick={() => this.clickFirstButton()}>Войти
                    </button>
                    {/*<button onClick={() => this.jumpTo(move)}>{desc}</button>*/}
                    {/*</form>*/}
                </div>
            </div>
        );
    }
}


export default FirstList;
