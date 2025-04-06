/**
 * The idea of the templates, is that you provide a function
 * that returns a renderable array
 */
export default class TemplateDirectory {
  constructor() {
    this.templates = new Map()
    this.defaultTemplates.forEach(this.addTemplate, this)
  }

  addTemplate(template) {
    this.templates.set(template.name, template.data)
  }

  getTemplate(name, props) {
    const template = this.templates.get(name)
    return template(props)
  }

  get defaultTemplates() {
    return [
      {
        "name": "slot",
        "data": (props) => {
          return ['div', {
            'data-controller': 'slot',
            'data-slot-plugin-value': props['plugin'],
            'data-slot-settings-value': JSON.stringify(props['settings'])
          }]
        }
      },
      {
        "name": "gap",
        "data": (props) => {
          return ['div', 'skfjsdjf']
        }
      },
    ]
  }
}
