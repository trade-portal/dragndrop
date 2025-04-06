export default class PluginDirectory {
  constructor() {
    this.plugins = new Map()
    this.defaultPlugins.forEach(this.addPlugin, this)
  }

  addPlugin(plugin) {
    this.plugins.set(plugin.name, plugin.interface)
  }

  get defaultPlugins() {
    return [
      {
        "name": "",
        "interface": ""
      }
    ]
  }
}
