import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FirstRightPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTask(task) {
        return (
            <div>
                <a href="#" className="card-link">{task}</a>
            </div>
        );
    }

    render() {
        let elems = [{
            id: 1,
            name: "Задача 1",
            term: "15.09.2019",
            gaveOut: "Supervisor",
            description: "Описание задачи",
            executor: "Бессонов",
            dateCreation: "01.09.2019",
            dateCompletion: "Not complete"
        },{
            id: 2,
            name: "Задача 2",
            term: "15.09.2019",
            gaveOut: "Supervisor",
            description: "Описание задачи",
            executor: "Бессонов",
            dateCreation: "01.09.2019",
            dateCompletion: "Not complete"
        },{
            id: 3,
            name: "Задача 3",
            term: "15.09.2019",
            gaveOut: "Supervisor",
            description: "Описание задачи",
            executor: "Бессонов",
            dateCreation: "01.09.2019",
            dateCompletion: "Not complete"
        } ];
        return (
            <div className="col-sm-9">
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Список задач</h5>
                        {elems.map(elem => this.renderTask(elem))}
                    </div>
                </div>
            </div>
        );
    }

}


export default FirstRightPanel;
