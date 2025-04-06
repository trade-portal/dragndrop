export default class RootComponent {
  initialize() {
    this.schema = null
  }

  render(schema) {
    this.schema = schema
    const html = this.renderPlugin()
    return 'example'
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
