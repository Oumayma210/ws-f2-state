import React, { Component } from "react";
import Child from "./Child";

export default class Appexp1 extends Component {
    //khraj mel dom 
    // state = { show: true, name: "hehehe" };
    // changeShow = () => {
    //     this.setState({ show: false });
    // };
    state = { name: "oumayma" };
    // // {/* pour changer state: on a methode predefinit:setstate */}
    Change = () => this.setState({ name: "Salim" });
    // // oubien:change=()=>{this.setState((this.state.name="oumayma"?{name:"Salim"}:{name:"wassim"}))}
    componentDidMount() {
        console.log("hello from component did mount!");
    }
    componentDidUpdate() {
        console.log("hello from component did update");
    }

    render() {
        console.log("hello from render");

        return (
            <div>
                <h1>{this.state.name}</h1>;
                {this.state.show === false ? (
                    <div>child khraj men dom</div>
                ) : (
                    <div>
                        {" "}
                        <hr /> <Child />
                    </div>
                )}
            </div>
        );
    }
}
