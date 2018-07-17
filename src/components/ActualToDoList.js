import { React } from 'react';
import { TextFieldExample } from '/.Home.js';
import { List } from "@cdk-uip/react-list";
import { DataTable } from "@cdk-uip/react-data-table"
import { DataTable } from "@cdk-uip/react-data-table";
import { DataTableBody } from "@cdk-uip/react-data-table";
import { DataTableRow } from "@cdk-uip/react-data-table";
import { DataTableCell } from "@cdk-uip/react-data-table";


export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // assignment: TextFieldExample.state.value,
            // listOfTasks: [],
            list: []

        };
        //     this.addToList= this.addToList.bind(this);

    }

    // addToList(){
    //     return 'Happy'
    // }

    render() {
        return (
            <DataTable selectable>

                <DataTableBody>
                    {this.state.list.map(item => (
                        <DataTableRow key={item.id} selected={item.checked}>
                            <DataTableCell nonNumeric>
                                <Checkbox
                                    checked={item.checked}
                                    onChange={({ target: { checked } }) => {
                                        this.setState({
                                            data: this.state.list.map(
                                                _ => (_.id === item.id ? { ..._, checked } : _)
                                            )
                                        });
                                    }}
                                />
                            </DataTableCell>
                            <DataTableCell>{list}</DataTableCell>
                        </DataTableRow>
                    ))}
                </DataTableBody>


            </DataTable>
        )

    }
}



//     addToList() {


//     }
//     return(



//     )
// }

// const ToDoList = () => (
//     <List>
//         <button onClick = {} > Add to list </button>
//         </List>
// );

// // <List>
// //   <ListItem>Hungerford</ListItem>
// //   <ListItem>Portland</ListItem>
// //   <ListItem>Hoffman Estates</ListItem>
// // </List>