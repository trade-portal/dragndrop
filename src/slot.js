import { Controller } from "@hotwired/stimulus"

export default class Slot extends Controller {
  static values = {
    plugin: String,
  }

  connect() {
    this.innerHTML = this.pluginValue
  }
}
