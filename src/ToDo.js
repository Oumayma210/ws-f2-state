import React, { Component } from "react";

export default class ToDo extends Component {
    state = {
        ToDo: ["learn js", "learn react", "learn backend"],
    };
//bch tzidini f todo haja jdida el handlechange
    handleChange = (e) => {
        this.setState({ ...this.state, newTask: e.target.value });
    };
    Buttonchange = (newTask) => {
        this.setState({
            ToDo: [...this.state.ToDo, newTask],
        });
    };
    render() {
        return (
            <div>
                <button onClick={() => this.Buttonchange(this.state.newTask)}>
                    ADD task
                </button>
                <input type="text" onChange={(e) => this.handleChange(e)} />
                {this.state.ToDo.map((el, i) => (
                    <ul>
                        <li key={i}>{el}</li>
                    </ul>
                ))}
            </div>
        );
    }
}
