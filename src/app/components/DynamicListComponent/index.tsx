import React from "react"
import { ConfigInterface } from "../Abstract"
import ListSelect from "./ListSelect"

export interface DynamicListComponentConfig {
  icon: JSX.Element
  label: string
  listItems: Record<string, any>
}

export class DynamicListComponent implements ConfigInterface {

  readonly hasConfig = true
  readonly hasCode = false
  //private addCallback: (component: DynamicListComponent) => void
  //private deleteCallback: (component: DynamicListComponent) => void
  private icon: JSX.Element
  private label: string
  private listItems: Record<string, any>

  constructor(config: DynamicListComponentConfig) {
    this.icon = config.icon
    this.label = config.label
    this.listItems = config.listItems
  }

  selectItem(item: string) {
    console.log(`TODO: add ${item}`)
  }

  renderConfigField() {
    return (
      <ListSelect
        label={this.label}
        icon={this.icon}
        listItems={Object.keys(this.listItems)}
        select={this.selectItem}
      />
    )
  }

}