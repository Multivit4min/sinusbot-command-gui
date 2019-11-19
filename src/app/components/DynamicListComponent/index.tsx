import React from "react"
import { ConfigInterface } from "../Abstract"
import ListSelect from "./ListSelect"

export interface DynamicListComponentConfig<T> {
  icon: JSX.Element
  label: string
  listItems: Record<string, any>
  onSelect: (element: T) => void
}

export class DynamicListComponent<T> implements ConfigInterface {

  readonly hasConfig = true
  readonly hasCode = false
  private icon: JSX.Element
  private label: string
  private listItems: Record<string, T>
  private onSelectCallback: (element: T) => void

  constructor(config: DynamicListComponentConfig<T>) {
    this.icon = config.icon
    this.label = config.label
    this.listItems = config.listItems
    this.onSelectCallback = config.onSelect
  }

  selectItem = (item: string) => {
    return this.onSelectCallback(this.listItems[item])
  }

  renderConfigField() {
    return (
      <ListSelect
        label={this.label}
        icon={this.icon}
        listItems={Object.keys(this.listItems)}
        onSelect={this.selectItem}
      />
    )
  }

}