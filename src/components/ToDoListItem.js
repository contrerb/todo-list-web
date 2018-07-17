import React from "react";
import TextField from "../../node_modules/@cdk-uip/react-text-field/dist/TextField";
import Checkbox from "../../node_modules/@cdk-uip/react-checkbox/dist/Checkbox";
import { FormField } from "@cdk-uip/react-form-field";
import Home from './Home.js';
import { Button } from "@cdk-uip/react-button";

export class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value)
    }

    render() {

        return (
            <div>
                <FormField id='Checkbox'>
                    <Checkbox
                        onChange={e => this.props.itemChecked(this.props.index, e.target.checked)}

                    />
                </FormField>
                <TextField
                    label=""
                    disabled={this.props.checked}
                    onChange={e => this.props.updateValue(this.props.index, e.target.value)}
                    trailingIcon={
                        <div>
                            <Button onClick={() => this.props.deleteListItem(this.props.index)}>Delete</Button>
                        </div>
                    }
                />
            </div>
        )
    }
}
