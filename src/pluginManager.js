import eventBus from './eventBus';

export class PluginManager {
    static plugins = [];

    static registerPlugin(plugin) {
        this.plugins.push(plugin);
        eventBus.emit('plugin-registered', plugin);
    }
}