import React from "react"
import { CommandType } from "../Abstract"
import ListSelect from "./ListSelect"

export interface DynamicListComponentConfig<T, Y extends CommandType> {
  icon: JSX.Element
  label: string
  listItems: Record<string, any>
  onSelect: (list: DynamicListComponent<T, Y>, element: T) => void
}

export class DynamicListComponent<T, Y extends CommandType> implements CommandType {

  readonly hasConfig = true
  readonly hasCode = true
  private icon: JSX.Element
  private label: string
  private listItems: Record<string, T>
  private onSelectCallback: (list: DynamicListComponent<T, Y>, element: T) => void
  private elements: Y[] = []

  constructor(config: DynamicListComponentConfig<T, Y>) {
    this.icon = config.icon
    this.label = config.label
    this.listItems = config.listItems
    this.onSelectCallback = config.onSelect
  }

  selectItem = (item: string) => {
    return this.onSelectCallback(this, this.listItems[item])
  }

  addElement(element: Y) {
    this.elements.push(element)
  }

  renderConfigField() {
    return (
      <>
        <ListSelect
          label={this.label}
          icon={this.icon}
          listItems={Object.keys(this.listItems)}
          onSelect={this.selectItem}
        />
        {this.elements.map(element => element.hasConfig ? element.renderConfigField() : null)}
      </>
    )
  }

  displayCode() {
    return this.elements.length > 0
  }

  renderCode() {
    return `${this.elements.map(el => el.renderCode()).join("\n")}\n`
  }

}