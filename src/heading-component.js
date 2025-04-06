export default class HeadingComponent {
  initialize() {
  }

  render(schema) {
    this.schema = schema
  }

  get availableSettings() {
    return {}
  }
  get calculatedData() {
    return {}
  }
  get validationSchema() {
    return {}
  }

  addToSlot(slotName, component, options) {
  }

  applyErrors(errors) {
    // fire event after setting errors
  }
}
