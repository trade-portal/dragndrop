import { Controller } from "@hotwired/stimulus"

export default class Slot extends Controller {
  static values = {
    plugin: String,
    settings: Object,
  }

  connect() {
    this.plugin = window.pluginDirectory.getPlugin(this.pluginValue, this.settingsValue)
    this.renderPlugin()
  }

  renderPlugin() {
    this.element.innerHTML = JSON.stringify(this.plugin)
  }
} 
