import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FirstList extends React.Component {

    clickFirstButton(){
        console.log("Click");
    }

    render() {
        return (
            <div className="container">
            <div className="col-6 align-content-center">
            <form>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <nav className="navbar navbar-light" style={{backgroundColor: '#ffffff'}}>
                        <img src={require('./vtb2018.png')} width="100" height="100"/>
                    </nav>
                </nav>


                <div className="form-group">
                    <label htmlFor="exampleInputLogin">Логин</label>
                    <input type="login" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp"
                           placeholder="Введите логин" width = "100"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Введите пароль"></input>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
                {/*<button onClick={() => this.jumpTo(move)}>{desc}</button>*/}
            </form>
            </div>
            </div>
        );
    }
}



export default FirstList;
