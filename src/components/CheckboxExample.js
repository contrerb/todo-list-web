import React from "react";
import { TextFieldExample } from './TextFieldExample'
import { Checkbox } from "@cdk-uip/react-checkbox";
import { FormField } from "@cdk-uip/react-form-field";



export class CheckboxEx extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.value)
        console.log(this.props.foo)
    }

    render() {
        return (

            <FormField id='Checkbox'>
                <Checkbox
                    checked={this.props.value}

                    onChange={e => this.setState({ checked: e.target.checked })}

                />
                <TextFieldExample />

            </FormField>
        )
    }
}

export default CheckboxEx;