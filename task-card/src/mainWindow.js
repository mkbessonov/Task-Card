import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeftPanel from "./leftPanel";

require('./mainWindow.css');


class MainWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: this.taskFirst()
            //date: this.taskSecond(2)
            // currentTask: {},
            // isTaskPanel: false

        };
    }

    click(id) {
        let valueId;
        valueId = Number(id);
        valueId--;
        //console.log("id = " + valueId);
        this.setState({date: this.taskSecond(valueId)})
    }

    clickOut(){
        this.setState({ date: this.taskFirst()})
    }

    renderTaskFirst(task) {
        return (
            <div>
                <button
                    className="card-link"
                    onClick={() => this.click(task.id)}
                >
                    {task.name}
                </button>

            </div>
        );
    }


    renderTaskSecond(task) {
        return (
            <div>
                {Object.entries(task).map(([value]) => this.renderTaskSecond1(value, task))}
            </div>
        );
    }

    renderTaskSecond1(task, nameObject) {
        return (
            <div>
                {task + ":  " + nameObject[task]}
            </div>
        );
    }

    taskFirst() {
        let value = "first";
        return (
            <div>
                <h5 className="card-title">Список задач</h5>
                {elems.map(elem => this.renderTaskFirst(elem))}
            </div>

        );
    }

    taskSecond(number) {
        return (
            <div>
                <div>
                    {this.renderTaskSecond(elems[number])}
                </div>
                <div>
                    <button
                        onClick={() => this.clickOut()}
                    >
                        Вернуться в меню
                    </button>
                </div>
            </div>


        );
    }

    componentDidMount() {

    }

    componentWillUnmount() {

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
                        <div className="col-sm-9">
                            <div className="card" style={{width: "100%"}}>
                                <div className="card-body">
                                    <h2>{this.state.date}</h2>
                                </div>
                            </div>
                        </div>

                        {/*<SecondRightPanel currentTask={this.state.currentTask}/>*/}

                    </div>
                </div>
            </div>
        );
    }
}

const elems = [{
    id: "1",
    name: "Задача 1",
    term: "25.09.2019",
    "gave Out": "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "05.09.2019",
    dateCompletion: "Not complete"
}, {
    id: "2",
    name: "Задача 2",
    term: "15.09.2019",
    gaveOut: "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "01.09.2019",
    dateCompletion: "Not complete"
}, {
    id: "3",
    name: "Задача 3",
    term: "01.10.2019",
    gaveOut: "Supervisor",
    description: "Описание задачи",
    executor: "Бессонов",
    dateCreation: "14.09.2019",
    dateCompletion: "Not complete"
}];


export default MainWindow;
