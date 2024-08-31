import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (optional, include if you need Bootstrap's JavaScript components)
import 'bootstrap';

const app = createApp(App);

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
        app.component(module.default.name, PluginComponent);
    });

    app.use(router);
    // Mount the app after all components are registered
    app.mount('#app');
}).catch(error => {
    console.error('Failed to load one or more plugins:', error);
});
