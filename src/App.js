import React, { Component } from "react";
// import Child from "./Child";
import ToDo from "./ToDo";

export default class App extends Component {
    // state = { show: true, name: "hehehe" };
    // changeShow = () => {
    //     this.setState({ show: false });
    // };
    // state = { name: "oumayma" };
    // // {/* pour changer state: on a methode predefinit:setstate */}
    // Change = () => this.setState({ name: "Salim" });
    // // oubien:change=()=>{this.setState((this.state.name="oumayma"?{name:"Salim"}:{name:"wassim"}))}
    // componentDidMount() {
    //     console.log("hello from component did mount!");
    // }
    // componentDidUpdate() {
    //     console.log("hello from component did update");
    // }
    // state = { movies: ["choufli hal", "hotel", "khotab ala beb"] };
    // changeShow = (newMovie) => {
    //     this.setState({
    //         movies: [...this.state.movies, newMovie],
    //     });
    // };
    // // ay hja nektbha nkhaznha f variable
    // handleChange = (e) => {
    //     this.setState({ ...this.state, newMovie: e.target.value });
    // };
    render() {
        // console.log("hello from render");

        return (
            <div>
                <h1>This is a class based component</h1>
                {/* <button onClick={() => this.changeShow(this.state.newMovie)}>
                    Show!
                    {/* kont hata button onClick={() => this.changeShow("film jdid")}>
                     */}
                {/* </button> */}
                {/* e: refeer lel input mte3i  */}
                {/* <input type="text" onChange={(e) => this.handleChange(e)} /> */}
                {/* <h1>{this.state.name}</h1>;
                {this.state.show === false ? (
                    <div>child khraj men dom</div>
                ) : (
                    <div>
                        {" "}
                        <hr /> <Child />
                    </div>
                )} */}
                {/* {this.state.movies.map((el, i) => (
                    <h1 key={i}>{el}</h1>
                ))} */}
                <ToDo />
            </div>
        );
    }
}
