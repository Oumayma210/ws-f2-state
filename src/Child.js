import React, { Component } from "react";

export default class Child extends Component {
    state = { name: "oumayma" };
    // {/* pour changer state: on a methode predefinit:setstate */}
    Change = () => this.setState({ name: "Salim" });
    // oubien:change=()=>{this.setState((this.state.name="oumayma"?{name:"Salim"}:{name:"wassim"}))}
    componentDidMount() {
        console.log("hello from component did mount!");
    }
    componentDidUpdate() {
        console.log("hello from component did update");
    }
    componentWillUnmount() {
        console.log("bye bye component");
    }
    render() {
        console.log("hello from render");

        return (
            <div>
                <button onClick={this.Change}>Click me!</button>
                <h1>{this.state.name}</h1>;
            </div>
        );
    }
}
