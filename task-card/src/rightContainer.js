import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RightPanel extends React.Component {

    renderTask(i, task) {
        return (
            <div>
                <a href="#" className="card-link">{i + ". " + task}</a>
            </div>
        );
    }

    render() {
        let elems = [1, 2, 3, 4, 5];
        return (
            <div className="col-sm-6">
                <div className="card" style={{width: "20rem", height: "40rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Список задач</h5>
                        {elems.map(elem => this.renderTask(elem, "Задача"))}

                    </div>
                </div>
            </div>
        );
    }
}


export default RightPanel;
