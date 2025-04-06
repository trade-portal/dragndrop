import { Controller } from "@hotwired/stimulus"
import { objectIsEmpty, getRandomId }  from './utils.js'
import Slot from './slot.js'
import PluginDirectory from './plugin-directory.js'
import TemplateDirectory from './template-directory.js'
import GlobalRenderer from './global-renderer.js'

export default class Dragndrop extends Controller {
  static values = {
    fullSchema: Object
  }

  connect() {
    if (!window.pluginDirectory)   { window.pluginDirectory   = new PluginDirectory() }
    if (!window.templateDirectory) { window.templateDirectory = new TemplateDirectory() }
    if (!window.globalRenderer)    { window.globalRenderer    = new GlobalRenderer() }

    this.element.addEventListener('component.request.update',   undefined)
    this.element.addEventListener('component.request.delete',   undefined)
    this.element.addEventListener('component.request.move',     undefined)
    this.element.addEventListener('gap.request.component.add',  undefined)
    this.element.addEventListener('gap.request.component.move', undefined)
    this.element.addEventListener('component.settings.updated', undefined)

    this.renderSchema()
  }

  get schema() {
    if (objectIsEmpty(this.fullSchemaValue)) {
      return this.defaultSchema
    } else {
      return this.fullSchemaValue
    }
  }

  renderSchema() {
    var slots = this.schema.root.slots.map(() => {
      return window.templateDirectory.getTemplate("slot")
    })
    this.element.innerHTML = ""
    const renderedSlots = window.globalRenderer.render(slots)
    this.element.appendChild(renderedSlots)
  }

  get defaultSchema() {
    return {
      "root": {
        "options": {},
        "slotsAvailable": 2,
        "slots": [
          {
            "id": "Page Header",
            "plugin": "header",
            "position": 1,
            "options": {
              "text": "This is a header",
              "canExportData": true
            },
          }
        ]
      },
      "data": {
        "Page Header": {
          "text": "This is a header"
        }
      }
    }
  }
}
