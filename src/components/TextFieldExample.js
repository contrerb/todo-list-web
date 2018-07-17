import React from "react";
import { List } from "@cdk-uip/react-list";
import { ListItem } from "@cdk-uip/react-list";
import { TextField } from "@cdk-uip/react-text-field";
import { TextFieldIcon } from "@cdk-uip/react-text-field";
import { Home } from './Home';
import { ToDoList } from './ToDoList.js';
import { Button } from "@cdk-uip/react-button";
import { ToDoListItem } from './ToDoListItem.js';

export class TextFieldExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            // listOfTasks: []

        };
    }
    //list = [];

    // addToList() {
    //     //list.push(this.state.value)
    //     this.listOfTasks.push(this.state.value);

    // }

    // returnArr() {
    //     this.state.listOfTasks
    // }
    render() {
        return (
            <div>
                <TextField
                    label="New Assignment"
                    value={this.state.value}

                    // tasks= {this.state.value}    
                    onChange={e => this.setState({ value: e.target.value })}

                    //  <button onClick = {addToList}> add to list</button>
                    //addToList
                    //onChange = {e=>this.setState({task: e.target.value})}

                    trailingIcon={
                        <TextFieldIcon onClick={() => this.setState({ value: "" })}>
                            clear
            </TextFieldIcon>
                    }
                />
                {/* <ToDoListItem value={this.state.value} /> */}
                {/* <Button onClick={this.addToList} > Add to list </Button> */}

            </div>




        );
    }
}