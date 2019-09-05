import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SecondRightPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    renderInformation(task) {
        return (
            <div>
                <a href="#" className="card-link">{task}</a>
            </div>
        );
    }

    render() {
        let information = {
            Term: "15.09.2019",
            GaveOut: "Supervisor",
            Description: "Описание задачи",
            Executor: "Бессонов",
            DateCreation: "01.09.2019",
            DateCompletion: "Not complete"
        };
        let elems = [1, 2, 3, 4, 5];
        return (
            <div className="col-sm-9">
                <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">Информация о задаче</h5>
                        {Object.entries(information).map(([value]) => this.renderInformation(value))}
                        {/*{elems.map(elem => this.renderTask(elem, "Задача"))}*/}

                    </div>
                </div>
            </div>
        );
    }
}


export default SecondRightPanel;