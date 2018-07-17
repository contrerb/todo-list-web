import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardText,
    CardActions,
    CardActionButton
} from "@cdk-uip/react-card";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import CheckboxEx from './CheckboxExample.js';
import { TextFieldExample } from './TextFieldExample';
import Checkbox from "../../node_modules/@cdk-uip/react-checkbox/dist/Checkbox";
//import {ToDoList} from '/.ActualToDoList.js';
import { FormField } from "@cdk-uip/react-form-field";
import { ToDoList } from './ToDoList.js';
import { ToDoListItem } from './ToDoListItem.js';
import TextField from "../../node_modules/@cdk-uip/react-text-field/dist/TextField";
import { Button } from "@cdk-uip/react-button";
import { TextFieldIcon } from "@cdk-uip/react-text-field";
import { ToDoListItem } from './ToDoListItem.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        let toDoList = []
        toDoList.push({
            index: 1,
            checked: false,
            value: "",
            readOnly: false
        }
        )
        this.state = {
            toDoList: toDoList
        }
    }

    addToList() {
        this.state.index
        { this.checkbox }
        if (this.state.checked === true) {
            this.setState({ readOnly: true })
        }
    }




    render() {
        return (
            <LayoutGrid>
                <LayoutGridCell span={12}>
                    <Card>
                        <CardHeader>
                            <CardTitle large>
                                <FormattedMessage
                                    size="12"
                                    id="Card.title"
                                    defaultMessage="To-Do list"
                                />
                            </CardTitle>
                        </CardHeader>
                        <CardText>
                            <FormField id='Checkbox'>
                                <Checkbox
                                    checked={this.state.checked}
                                    onChange={e => this.setState({ checked: e.target.checked })}
                                />

                            </FormField>
                            <div>
                                <TextField
                                    label="new Assignment"
                                    value={this.state.value}
                                    onChange={e => this.setState({ value: e.target.value })}
                                    trailingIcon={
                                        <TextFieldIcon onClick={() => this.setState({ value: "" })}>
                                            clear
                                        </TextFieldIcon>
                                    }
                                />
                            </div>
                            {this.state.toDoList.map((ToDoList, IDX) => {

                                <ToDoListItem value={toDo.value} value={toDo.checked} />
                            })}
                            <Button onClick={this.addToList}> Add a new task</Button>


                            <ToDoList />
                        </CardText>
                    </Card>
                </LayoutGridCell>
            </LayoutGrid>
        )
    }
}






// import React from "react";
// import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardSubtitle,
//   CardText,
//   CardActions,
//   CardActionButton
// } from "@cdk-uip/react-card";
// import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
// import CheckboxEx from './CheckboxExample.js';
// import { TextFieldExample } from './TextFieldExample';
// import Checkbox from "../../node_modules/@cdk-uip/react-checkbox/dist/Checkbox";
// //import {ToDoList} from '/.ActualToDoList.js';
// import { FormField } from "@cdk-uip/react-form-field";
// import { ToDoList } from './ToDoList.js';
// import { ToDoListItem } from './ToDoListItem.js';
// import TextField from "../../node_modules/@cdk-uip/react-text-field/dist/TextField";
// import { Button } from "@cdk-uip/react-button";
// import { TextFieldIcon } from "@cdk-uip/react-text-field";

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     let toDoList = []
//     toDoList.push({
//       index: 1,
//       checked: false,
//       value: "",
//       disabled: false
//     }
//     )
//     this.state = {
//       toDoList: toDoList
//     }
//   }

//   textFieldExample() {
//     return (
//       <div>
//         <TextField
//           label="new Assignment"
//           value={this.state.value}
//           onChange={e => this.setState({ value: e.target.value })}
//           trailingIcon={
//             <TextFieldIcon onClick={() => this.setState({ value: "" })}>
//               clear
//             </TextFieldIcon>
//           }
//         />

//       </div>

//     )
//   }

//   checkbox() {
//     return (
//       <FormField id='Checkbox'>
//         <Checkbox
//           checked={this.state.checked}
//           onChange={e => this.setState({ checked: e.target.checked })}
//         />
//         {/* {this.textFieldExample} */}
//       </FormField>
//     )
//   }

//   // addToList() {
//   //   return (
//   //   //{ this.index }
//   //   //{ this.checkbox }
//   //   if (this.state.checked === true) {
//   //     this.setState({ disabled: true })
//   //   }
//   // )
//   // }




//   render() {
//     return (
//       <LayoutGrid>
//         <LayoutGridCell span={12}>
//           <Card>
//             <CardHeader>
//               <CardTitle large>
//                 <FormattedMessage
//                   size="12"
//                   id="Card.title"
//                   defaultMessage="To-Do list"
//                 />
//               </CardTitle>
//             </CardHeader>
//             <CardText>
//               {this.checkbox}
//               {this.textFieldExample}
//               {/* <Button onClick={this.addToList}> Add a new task</Button> */}


//               <ToDoList />
//             </CardText>
//           </Card>
//         </LayoutGridCell>
//       </LayoutGrid>
//     )
//   }
// }

// export default Home;




