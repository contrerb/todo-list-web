import React from "react";
import TextField from "../../node_modules/@cdk-uip/react-text-field/dist/TextField";
import Checkbox from "../../node_modules/@cdk-uip/react-checkbox/dist/Checkbox";

class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value)
    }

    render() {
        <div>

            <Checkbox
                checked={this.props.checked}
                onChange={e => this.setState({ checked: e.target.checked })}
            />
            <TextField
                value={this.props.value}
                onChange={e => this.setState({ value: e.target.value })}
                trailingIcon={
                    <TextFieldIcon onClick={() => this.setState({ value: "" })}>
                        clear</TextFieldIcon>
                }

            />
        </div>



    }
}