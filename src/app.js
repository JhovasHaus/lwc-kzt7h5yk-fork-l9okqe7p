import { LightningElement } from "lwc";

export default class App extends LightningElement {
  columns = [
    { label: 'Field 1', fieldName: 'field1' },
    { label: 'Field 2', fieldName: 'field2' },
    { label: 'Field 3', fieldName: 'field3', editable: true },
    { label: 'Field 4', fieldName: 'field4', editable: true },
    { label: 'Field 5', fieldName: 'field5', editable: true }
  ]
  columns2 = this.columns.map(column => ({...column, editable: false }))
  data = [...Array(5).keys()].map(
    (id) => ({id: `${id+1}`, field1: `Field 1 ${id}`, field2: `Field 2 ${id}` })
  )
  data2 = []
  save(event) {
    this.data2 = this.data.map((record) => 
      ({
      ...record, 
      ...(event.detail.draftValues.find((value) => value.id === record.id) || {})
      })
    )
  }
}
