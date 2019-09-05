import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftPanel from "./leftPanel";
// import RightPanel from "./rightContainer";
import SecondRightPanel from "./secondRightContainer";

require('./mainWindow.css');

class MainWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTask: {},
            isTaskPanel: false
        };
    }

    setCurrentTask(currentTask) {
        console.log(currentTask);
        this.setState({'currentTask' : currentTask});
    }

    render() {
        return (
            <div>
                <nav className="navbar vtb-header">
                </nav>
                <div className="vtb-logo">
                    <img src={require('./vtb2018.png')}
                         width="100" height="100"/></div>
                <div className="container-fluid">
                    <div className="row">
                        <LeftPanel/>
                        <RightPanel setCurrentTask={this.setCurrentTask}/>
                        <SecondRightPanel currentTask={this.state.currentTask}/>
                    </div>
                </div>
            </div>
        );
    }
}

const elems = [{
    id: 1,
    name: "Задача 1",
    term: "25.09.2019",
    gaveOut: "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "05.09.2019",
    dateCompletion: "Not complete"
}, {
    id: 2,
    name: "Задача 2",
    term: "15.09.2019",
    gaveOut: "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "01.09.2019",
    dateCompletion: "Not complete"
}, {
    id: 3,
    name: "Задача 3",
    term: "01.10.2019",
    gaveOut: "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "14.09.2019",
    dateCompletion: "Not complete"
}];

function renderTask(task, callback) {
    console.log(task);
    if (task) {
        return (
            <div>
                {/*<div onClick={callback(task)} className="card-link">{task.name}</div>*/}
                <div  className="card-link">{task.name}</div>
            </div>
        );
    }
}

const RightPanel = ({setCurrentTask}) => (
    <div className="col-sm-9">
        <div className="card" style={{width: "100%"}}>
            <div className="card-body">
                <h5 className="card-title">Список задач</h5>
                {elems.map(elem => renderTask(elem, setCurrentTask))}
            </div>
        </div>
    </div>
);
const Greeting = ({greeting, isShow}) =>
    isShow ? <h1>{greeting}</h1> : null;

export default MainWindow;
