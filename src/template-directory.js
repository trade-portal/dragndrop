export default class TemplateDirectory {
  constructor() {
    this.templates = new Map()
    this.defaultTemplates.forEach(this.addTemplate, this)
  }

  addTemplate(template) {
    this.templates.set(template.name, template.data)
  }

  getTemplate(name) {
    const template = this.templates.get(name)
    return template
  }

  get defaultTemplates() {
    return [
      {
        "name": "slot",
        "data": ['div', 'eyip']
      },
      {
        "name": "gap",
        "data": ['div', 'skfjsdjf']
      },
    ]
  }
}
