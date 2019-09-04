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


    render() {
        let elem = [1, 2, 3, 4, 5];
        return (
            <div className="row">
                <div className="col-sm-6">
                    <div className="card" style={{width: "20rem", height: "40rem"}}>
                        <img src={require('./UserIcon.png')} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Название карточки</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the
                                bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card" style={{width: "50rem", height: "40rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Список задач</h5>
                            {/*{elem.map() => this.renderTask(elem, "Задача")}*/}



                            {/*{for(let i = 0; i < 5; i++){*/}
                                {/*renderTask(i, "Задача");*/}
                            {/*}}*/}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default MainWindow;
