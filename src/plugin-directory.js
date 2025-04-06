export default class PluginDirectory {
  constructor() {
    this.plugins = new Map()
    this.defaultPlugins.forEach(this.addPlugin, this)
  }

  addPlugin(plugin) {
    this.plugins.set(plugin.name, plugin.interface)
  }

  getPlugin(name, props) {
    const plugin = this.plugins.get(name)
    return plugin(props)
  }

  get defaultPlugins() {
    return [
      {
        "name": "header",
        "interface": function(props) {
          console.log(props)
          return props
        }
      }
    ]
  }
}
