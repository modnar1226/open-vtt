import { createApp } from 'vue';
import App from './App.vue';

// List of plugins to load
const plugins = [
    './plugins/examplePlugin.js',
    './plugins/dropdownMenu.js',
    // './plugins/examplePlugin2.js',
    // './plugins/examplePlugin3.js'
];

// Dynamically import and register all plugins
Promise.all(plugins.map(path => import(
    /* @vite-ignore */ path
))).then(modules => {
    modules.forEach(module => {
        const PluginComponent = module.default.component;
        console.log(PluginComponent)
        app.component(module.default.name, PluginComponent);
    });

    // Mount the app after all components are registered
    app.mount('#app');
}).catch(error => {
    console.error('Failed to load one or more plugins:', error);
});
