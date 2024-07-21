// main.js
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// Dynamically import the plugin
import('./plugins/examplePlugin.js').then((module) => {
    const PluginComponent = module.default.component;
    app.component(module.default.name, PluginComponent);
});

app.mount('#app');
