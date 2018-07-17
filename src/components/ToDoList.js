import React from "react";
import TextField from "../../node_modules/@cdk-uip/react-text-field/dist/TextField";
import { Checkbox } from "@cdk-uip/react-checkbox";
import { FormField } from "@cdk-uip/react-form-field";
import { Button } from "@cdk-uip/react-button";


export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value)
        this.state = {
            checked: false,
            value: ""
        }
        // this.CheckboxList = this.CheckboxList.bind(this)
    }

    CheckboxList() {
        return (
            <FormField id='checkbox'>
                <Checkbox
                    checked={this.state.checked}
                    onChange={e => this.setState({ checked: e.target.checked })}
                />
            </FormField>
        )
    }

    textField() {
        <TextField
            value={this.props.value}
        // onChange={e => this.setState({ value: e.target.value })}

        />
    }

    product() {
        <div>
            {this.CheckboxList()}
            {this.textField()}
            <label> {this.state.value} </label>
        </div>
    }

    render() {
        return (
            <div>
                {/* onChange = {e => this.setState({ value: e.target.value })} */}
                <Button onClick={this.CheckboxList()} > add to the list </Button>
            </div>
        );
    }
}