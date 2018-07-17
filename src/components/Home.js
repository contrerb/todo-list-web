import React from "react";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import {
  Card,
  CardHeader,
  CardTitle,
  CardText
} from "@cdk-uip/react-card";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";
import { ToDoListItem } from './ToDoListItem.js';
import { Button } from "@cdk-uip/react-button";


class Home extends React.Component {
  constructor(props) {
    super(props);
    let toDoList = []
    toDoList.push({
      checked: false,
      value: ""
    })
    this.state = {
      toDoList: toDoList
    }

    this.itemChecked = this.itemChecked.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.addToList = this.addToList.bind(this)
    this.deleteListItem = this.deleteListItem.bind(this)
  }

  itemChecked(index, checked) {
    let items = this.state.toDoList
    items[index] = { checked: checked, value: "" }
    this.setState({ toDoList: items })
    if (items[index].checked === true) {
      items[index].disabled = true
      this.setState({ toDoList: items })
    }
  }

  updateValue(index, value) {
    let items = this.state.toDoList
    items[index] = { checked: false, value: value }
    this.setState({ toDoList: items })
  }

  addToList(index, value) {
    let items = this.state.toDoList
    items.push({ checked: false, value: value })
    this.setState({ toDoList: items })
  }

  deleteListItem(index) {
    let items = JSON.parse(JSON.stringify(this.state.toDoList))
    console.log(JSON.stringify(items))
    items.splice(index, 1)
    console.log(JSON.stringify(items))
    this.setState({ toDoList: items })
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
              <Button onClick={this.addToList}> Add item to list </Button>
              {this.state.toDoList.map((toDo, idx) => (
                <div key={idx} >
                  <li >{idx + 1}</li>

                  <ToDoListItem
                    value={toDo.value}
                    index={idx}
                    checked={toDo.checked}
                    updateValue={this.updateValue}
                    itemChecked={this.itemChecked}
                    deleteListItem={this.deleteListItem}
                  />
                </div>
              ))}
            </CardText>
          </Card>
        </LayoutGridCell>
      </LayoutGrid>
    )
  } s
}

export default Home;
